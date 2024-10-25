import { Rule, SchematicContext, SchematicsException, Tree, callRule } from '@angular-devkit/schematics';
import { isStandaloneApp } from '@angular/cdk/schematics';
import { addRootImport, addRootProvider, readWorkspace } from '@schematics/angular/utility';
import { getMainFilePath } from '@schematics/angular/utility/standalone/util';
import { firstValueFrom, map } from 'rxjs';
import { Schema } from '../../schema';

export function addDesignAngularKit({ mainFilePath, projectName }: { mainFilePath: string; projectName: string }): Rule {
  return (host: Tree, context: SchematicContext) => {
    const isNotStandaloneApp = !isStandaloneApp(host, mainFilePath);

    const rule = isNotStandaloneApp
      ? addRootImport(projectName, ({ code, external }) => code`${external('DesignAngularKitModule', 'design-angular-kit')}.forRoot()\n`)
      : addRootProvider(projectName, ({ code, external }) => code`${external('provideDesignAngularKit', 'design-angular-kit')}()`);

    return callRule(rule, host, context);
  };
}

export function addDesignAngularKitPure(options: Schema): Rule {
  return async (host: Tree, context: SchematicContext) => {
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

    const isNotStandaloneApp = !isStandaloneApp(host, mainFilePath);

    const rule = isNotStandaloneApp
      ? addRootImport(projectName, ({ code, external }) => code`${external('DesignAngularKitModule', 'design-angular-kit')}.forRoot()\n`)
      : addRootProvider(projectName, ({ code, external }) => code`${external('provideDesignAngularKit', 'design-angular-kit')}()`);

    // return firstValueFrom(callRule(rule, host, context).ma);
    return firstValueFrom(
      callRule(rule, host, context).pipe(
        map(() => {
          return (): Rule => () => {};
        })
      )
    );
  };
}
