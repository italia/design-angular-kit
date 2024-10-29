import { JsonArray, JsonObject, normalize, workspaces } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { readWorkspace, writeWorkspace } from '@schematics/angular/utility';
import * as path from 'path';

import { Schema } from '../../schema';
import { getProjectTargetOptions } from './angular-json-helper';
import { NoProjectException } from './exceptions';

const BOOTSTRAP_ITALIA_CSS_FILEPATH = 'node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css';
const SUPPORTED_BOOTSTRAP_ITALIA_STYLE_MAP: Record<string, string> = {
  '.sass': `
  /* Importazione libreria SCSS di bootstrap-italia */
  @import 'bootstrap-italia/scss/bootstrap-italia'
  `,
  '.scss': `
  /* Importazione libreria SCSS di bootstrap-italia */
  @import '../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss';
  `,
};

/**
 * if supported
 *    add to styles.scss or to style.sass
 * else
 *  add css to assets in angular.json
 * @param options
 * @returns Rule
 */
export function addImportToStyleFile(options: Schema): Rule {
  return async (host: Tree, context: SchematicContext) => {
    const workspace = await readWorkspace(host);

    const projectName = options.project || workspace.extensions.defaultProject!.toString();
    const project = workspace.projects.get(projectName);
    if (!project) {
      throw new NoProjectException(projectName);
    }

    const styleFilePath = getProjectStyleFile(project as any) || '';
    const styleFileExtension = path.extname(styleFilePath);
    const styleFilePatch = SUPPORTED_BOOTSTRAP_ITALIA_STYLE_MAP[styleFileExtension];

    // found supported styles
    if (styleFilePatch) {
      return addBootstrapItaliaToStylesFile(styleFilePath, styleFilePatch);
    } else {
      // found some styles, but unsupported
      if (styleFileExtension !== '.css' && styleFileExtension !== '') {
        context.logger.warn('messages.unsupportedStyles(styleFilePath)');
      }

      // just patching 'angular.json'
      addBootstrapItaliaToAngularJson(project as any);
      await writeWorkspace(host, workspace);
    }
  };
}

function addBootstrapItaliaToStylesFile(styleFilePath: string, styleFilePatch: string): Rule {
  return async (host: Tree) => {
    const styleContent = host.read(styleFilePath)!.toString('utf-8');

    const recorder = host.beginUpdate(styleFilePath);
    recorder.insertRight(styleContent.length, styleFilePatch);

    host.commitUpdate(recorder);
  };
}

function addBootstrapItaliaToAngularJson(project: workspaces.ProjectDefinition) {
  const targetOptions = getProjectTargetOptions(project, 'build');
  const styles = targetOptions.styles as JsonArray | undefined;
  if (!styles) {
    targetOptions.styles = [BOOTSTRAP_ITALIA_CSS_FILEPATH];
  } else {
    const existingStyles = styles.map(s => (typeof s === 'string' ? s : (s as JsonObject)!['input'])) as Array<string>;

    for (const [, stylePath] of existingStyles.entries()) {
      if (stylePath === BOOTSTRAP_ITALIA_CSS_FILEPATH) {
        return;
      }
    }
    styles.unshift(BOOTSTRAP_ITALIA_CSS_FILEPATH);
  }
}

// Regular expression that matches all possible Angular CLI default style files
const defaultStyleFileRegex = /styles\.(c|le|sc|sa)ss/;

// Regular expression that matches all files that have a proper stylesheet extension
const validStyleFileRegex = /\.(c|le|sc|sa)ss/;

function getProjectStyleFile(project: workspaces.ProjectDefinition, extension?: string): string | null {
  const buildOptions = getProjectTargetOptions(project, 'build');

  if (buildOptions.styles && Array.isArray(buildOptions.styles) && buildOptions.styles.length) {
    const styles = buildOptions.styles.map(s => (typeof s === 'string' ? s : (s as JsonObject)!['input'])) as Array<string>;

    // Look for the default style file that is generated for new projects by the Angular CLI. This
    // default style file is usually called `styles.ext` unless it has been changed explicitly.
    const defaultMainStylePath = styles.find(file => (extension ? file === `styles.${extension}` : defaultStyleFileRegex.test(file)));

    if (defaultMainStylePath) {
      return normalize(defaultMainStylePath);
    }

    // If no default style file could be found, use the first style file that matches the given
    // extension. If no extension specified explicitly, we look for any file with a valid style
    // file extension.
    const fallbackStylePath = styles.find(file => (extension ? file.endsWith(`.${extension}`) : validStyleFileRegex.test(file)));

    if (fallbackStylePath) {
      return normalize(fallbackStylePath);
    }
  }

  return null;
}
