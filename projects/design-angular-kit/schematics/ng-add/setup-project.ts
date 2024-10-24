import { callRule, chain, noop, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { addRootImport, addRootProvider, readWorkspace } from '@schematics/angular/utility';
import { isStandaloneApp } from '@schematics/angular/utility/ng-ast-utils';
import { getMainFilePath } from '@schematics/angular/utility/standalone/util';

import { Schema } from './schema';

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

    return chain([addAnimations(), addHttpClient(), addDesignAngularKit({ mainFilePath, projectName })]);
  };
}

function addAnimations(): Rule {
  //this dependencies should be provided at application level instead of lib level. ref: provideDesignAngularKit
  //provideAnimationsAsync(),
  return (host: Tree, context: SchematicContext) => callRule(noop(), host, context);
}

function addHttpClient(): Rule {
  //this dependencies should be provided at application level instead of lib level. ref: provideDesignAngularKit
  //provideAnimationsAsync(),
  return (host: Tree, context: SchematicContext) => callRule(noop(), host, context);
}

function addDesignAngularKit({ mainFilePath, projectName }: { mainFilePath: string; projectName: string }): Rule {
  return (host: Tree, context: SchematicContext) => {
    const isNotStandaloneApp = !isStandaloneApp(host, mainFilePath);

    const rule = isNotStandaloneApp
      ? addRootImport(projectName, ({ code, external }) => code`${external('DesignAngularKitModule', 'design-angular-kit')}.forRoot()\n`)
      : addRootProvider(projectName, ({ code, external }) => code`${external('provideDesignAngularKit', 'design-angular-kit')}()`);

    return callRule(rule, host, context);
  };
}
