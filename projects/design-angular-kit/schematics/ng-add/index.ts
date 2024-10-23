import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';

import { Schema } from './schema';
import { addPackageToPackageJson, getPackageVersionFromPackageJson, toSemVerObject } from './utils';
import { getPackageVersion } from './versions-helper';

const fallbackMaterialVersionRange = `~0.0.0-PLACEHOLDER`;
const packageName = 'design-angular-kit';

export default function (options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    // Version tag of the `@angular/core` dependency that has been loaded from the `package.json`
    // of the CLI project. This tag should be preferred because all Angular dependencies should
    // have the same version tag if possible.
    const ngCoreVersionTag = getPackageVersionFromPackageJson(host, '@angular/core');
    const designAngularKitVersionRange = getPackageVersionFromPackageJson(host, packageName);
    const angularDependencyVersion = ngCoreVersionTag || `0.0.0-NG`;

    const { major: angularMajorVersion } = toSemVerObject(angularDependencyVersion);

    const version = getPackageVersion({ angularMajorVersion });

    // The CLI inserts `design-angular-kit` into the `package.json` before this schematic runs.
    // This means that we do not need to insert Design Angular Kit into `package.json` files again.
    // In some cases though, it could happen that this schematic runs outside of the CLI `ng add`
    // command, or Design Angular Kit is only listed a dev dependency. If that is the case, we insert a
    // version based on the current build version (substituted version placeholder).
    if (designAngularKitVersionRange === null) {
      addPackageToPackageJson(host, packageName, version);
    }

    addPackageToPackageJson(host, '@angular/cdk', angularDependencyVersion || fallbackMaterialVersionRange);
    addPackageToPackageJson(host, '@angular/animations', angularDependencyVersion);

    const installTaskId = context.addTask(new NodePackageInstallTask());

    context.addTask(new RunSchematicTask('ng-add-setup-project', options), [installTaskId]);
  };
}
