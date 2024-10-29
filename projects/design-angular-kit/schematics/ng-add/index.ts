import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';

import { Schema } from './schema';
import { addPackageToPackageJson, getPackageVersionFromPackageJson, toSemVerObject } from './utils';
import { getPackageVersion } from './versions-helper';

const DESIGN_ANGULAR_KIT_PACKAGE_NAME = 'design-angular-kit';
const NG_LATEST_VERSION = '19.0.0';

export default function (options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    // Get the version of `@angular/core`
    // This tag should be preferred because all Angular dependencies should  have the same version tag if possible.
    const ngCoreVersionTag = getPackageVersionFromPackageJson(host, '@angular/core');
    const designAngularKitVersionRange = getPackageVersionFromPackageJson(host, DESIGN_ANGULAR_KIT_PACKAGE_NAME);
    const angularDependencyVersion = ngCoreVersionTag || NG_LATEST_VERSION;

    const { major: angularMajorVersion } = toSemVerObject(angularDependencyVersion);

    const designAngularKitPackageVersion = getPackageVersion({ angularMajorVersion });

    // The CLI inserts `design-angular-kit` into the `package.json` before this schematic runs.
    // This means that we do not need to insert Design Angular Kit into `package.json` files again.
    if (designAngularKitVersionRange === null) {
      addPackageToPackageJson(host, DESIGN_ANGULAR_KIT_PACKAGE_NAME, designAngularKitPackageVersion);
    }

    addPackageToPackageJson(host, '@angular/cdk', angularDependencyVersion);
    addPackageToPackageJson(host, '@angular/animations', angularDependencyVersion);

    const installTaskId = context.addTask(new NodePackageInstallTask());

    context.addTask(new RunSchematicTask('ng-add-setup-project', options), [installTaskId]);
  };
}
