import { JsonArray, JsonObject, workspaces } from '@angular-devkit/core';
import { Rule, Tree } from '@angular-devkit/schematics';
import { readWorkspace, writeWorkspace } from '@schematics/angular/utility';

import { Schema } from '../../schema';
import { getProjectTargetOptions } from './angular-json-helper';
import { NoProjectException } from './exceptions';

const LOCALISATION_CONFIG = {
  glob: '**/*',
  input: './node_modules/design-angular-kit/assets/i18n',
  output: '/bootstrap-italia/i18n/',
};

export function addLocalisation(options: Schema): Rule {
  return async (host: Tree) => {
    const workspace = await readWorkspace(host);

    const projectName = options.project || workspace.extensions.defaultProject!.toString();
    const project = workspace.projects.get(projectName);
    if (!project) {
      throw new NoProjectException(projectName);
    }

    addLocalisationToAngularJson(project);
    await writeWorkspace(host, workspace);
  };
}

function addLocalisationToAngularJson(project: workspaces.ProjectDefinition) {
  const targetOptions = getProjectTargetOptions(project, 'build');
  const assets = targetOptions.assets as JsonArray | undefined;
  if (!assets) {
    targetOptions.assets = [LOCALISATION_CONFIG];
  } else {
    const existingAssets = assets.map(s => (typeof s === 'string' ? s : (s as JsonObject)!['input'])) as Array<string>;

    for (const [, input] of existingAssets.entries()) {
      if (input === LOCALISATION_CONFIG.input) {
        return;
      }
    }
    assets.push(LOCALISATION_CONFIG);
  }
}
