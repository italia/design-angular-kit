import { JsonArray, JsonObject, workspaces } from '@angular-devkit/core';
import { Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { getProjectStyleFile } from '@angular/cdk/schematics';
import { readWorkspace, writeWorkspace } from '@schematics/angular/utility';
import * as path from 'path';

import { Schema } from '../../schema';

const BOOTSTRAP_ITALIA_CSS_FILEPATH = 'node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css';
const SUPPORTED_BOOTSTRAP_ITALIA_STYLE_IMPORTS: Record<string, string> = {
  '.sass': `
  /* Importing Bootstrap SCSS file. */
  @import '../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss';
  `,
  '.scss': `
  /* Importing Bootstrap SCSS file. */
  @import '../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss';
  `,
};

// if supported
//  add to styles.scss
// else
//  add css to assets in angular.json
export function addImportToStyleFile(options: Schema): Rule {
  return async (host: Tree, context: SchematicContext) => {
    const workspace = await readWorkspace(host);

    const projectName = options.project || workspace.extensions.defaultProject!.toString();
    const project = workspace.projects.get(projectName);
    if (!project) {
      throw new SchematicsException('messages.noProject(projectName)');
    }

    const styleFilePath = getProjectStyleFile(project as any) || '';
    const styleFileExtension = path.extname(styleFilePath);
    const styleFilePatch = SUPPORTED_BOOTSTRAP_ITALIA_STYLE_IMPORTS[styleFileExtension];

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

function getProjectTargetOptions(project: workspaces.ProjectDefinition, buildTarget: string) {
  const buildTargetObject = project.targets.get(buildTarget);
  if (buildTargetObject && buildTargetObject.options) {
    return buildTargetObject.options;
  }

  throw new SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
}
