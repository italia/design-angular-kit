import { Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { getProjectStyleFile } from '@angular/cdk/schematics';
import { readWorkspace } from '@schematics/angular/utility';
import * as path from 'path';

import { Schema } from '../../schema';

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
      return addBootstrapToStylesFile(styleFilePath, styleFilePatch);
    } else {
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
    const styleContent = host.read(styleFilePath)!.toString('utf-8');

    const recorder = host.beginUpdate(styleFilePath);
    recorder.insertRight(styleContent.length, styleFilePatch);

    host.commitUpdate(recorder);
  };
}
