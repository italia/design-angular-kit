import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { getProjectFromWorkspace } from '@angular/cdk/schematics';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { addAnimations, addAssets, addDesignAngularKit, addHttpClient, addImportToStyleFile, addLocalisation } from './rules/setup-project';
import { Schema } from './schema';

import { ProjectType } from '@schematics/angular/utility/workspace-models';

export default function (options: Schema): Rule {
  return async (host: Tree, context: SchematicContext) => {
    const workspace = await getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    const isAProject = project.extensions['projectType'] === ProjectType.Application;

    if (isAProject) {
      return chain([
        addAnimations(),
        addHttpClient(),
        addDesignAngularKit(options),
        addImportToStyleFile(options),
        addAssets(options),
        addLocalisation(options),
      ]);
    }
    context.logger.warn(
      `Design Angular Kit has been set in your workspace. No additional setup required.\nIf you intend to run the schematics on a specific project, please use -- project option `
    );
    return;
  };
}
