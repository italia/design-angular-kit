import { chain, Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import { readWorkspace } from '@schematics/angular/utility';
import { getMainFilePath } from '@schematics/angular/utility/standalone/util';

import { Schema } from './schema';
import { addAnimations, addDesignAngularKit, addHttpClient, addImportToStyleFile } from './setup-project/rules';

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
