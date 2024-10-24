import { Rule, SchematicContext, Tree, callRule } from '@angular-devkit/schematics';
import { isStandaloneApp } from '@angular/cdk/schematics';
import { addRootImport, addRootProvider } from '@schematics/angular/utility';

export function addDesignAngularKit({ mainFilePath, projectName }: { mainFilePath: string; projectName: string }): Rule {
  return (host: Tree, context: SchematicContext) => {
    const isNotStandaloneApp = !isStandaloneApp(host, mainFilePath);

    const rule = isNotStandaloneApp
      ? addRootImport(projectName, ({ code, external }) => code`${external('DesignAngularKitModule', 'design-angular-kit')}.forRoot()\n`)
      : addRootProvider(projectName, ({ code, external }) => code`${external('provideDesignAngularKit', 'design-angular-kit')}()`);

    return callRule(rule, host, context);
  };
}
