import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { getProjectStyleFile } from '@angular/cdk/schematics';
import { readWorkspace } from '@schematics/angular/utility';
import { getMainFilePath } from '@schematics/angular/utility/standalone/util';
import * as path from 'path';

import { Schema } from './schema';
import { addAnimations, addDesignAngularKit, addHttpClient } from './setup-project/rules';

// const BOOTSTRAP_ITALIA_CSS_FILEPATH = 'node_modules/bootstrap/dist/css/bootstrap.min.css';
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

export default function (options: Schema): Rule {
  return async (host: Tree) => {
    const workspace = await readWorkspace(host);
    const projectName = options.project || (workspace.extensions.defaultProject as string);

    // 1. getting project by name
    const project = workspace.projects.get(projectName);
    if (!project) {
      throw new SchematicsException('messages.noProject(projectName)');
    }

    // 2. getting main file for project
    const mainFilePath = await getMainFilePath(host, projectName);
    if (!mainFilePath || !host.read(mainFilePath)) {
      throw new SchematicsException('messages.noMainFile(projectName)');
    }

    return chain([addAnimations(), addHttpClient(), addDesignAngularKit({ mainFilePath, projectName }), addImportToStyleFile(options)]);
  };
}

// if supported
//  add to styles.scss
// else
//  add css to assets in angular.json
function addImportToStyleFile(options: Schema): Rule {
  return async (host: Tree, context: SchematicContext) => {
    const workspace = await readWorkspace(host);

    const projectName = options.project || workspace.extensions.defaultProject!.toString();
    const project = workspace.projects.get(projectName);
    if (!project) {
      throw new SchematicsException('messages.noProject(projectName)');
    }
    console.log('addImportToStyleFile');

    const styleFilePath = getProjectStyleFile(project as any) || '';
    const styleFileExtension = path.extname(styleFilePath);
    const styleFilePatch = SUPPORTED_BOOTSTRAP_ITALIA_STYLE_IMPORTS[styleFileExtension];
    console.log('addImportToStyleFile', styleFileExtension);

    // found supported styles
    if (styleFilePatch) {
      return addBootstrapToStylesFile(styleFilePath, styleFilePatch);
    } else {
      console.log('addImportToStyleFile: unsupported');

      // found some styles, but unsupported
      if (styleFileExtension !== '.css' && styleFileExtension !== '') {
        context.logger.warn('messages.unsupportedStyles(styleFilePath)');
      }

      // just patching 'angular.json'
      // addBootstrapToAngularJson(project as any);
      // await writeWorkspace(host, workspace);
    }
  };
}

function addBootstrapToStylesFile(styleFilePath: string, styleFilePatch: string): Rule {
  return async (host: Tree) => {
    console.log('addBootstrapToStylesFile cb');
    const styleContent = host.read(styleFilePath)!.toString('utf-8');

    const recorder = host.beginUpdate(styleFilePath);
    recorder.insertRight(styleContent.length, styleFilePatch);

    host.commitUpdate(recorder);
    console.log('addBootstrapToStylesFile cb end');
  };
}
