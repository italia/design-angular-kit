import { Rule } from '@angular-devkit/schematics';
import { addRootImport } from '@schematics/angular/utility';
import { Schema } from './schema';

export function ngAdd(options: Schema): Rule {
  // Add an import `DesignAngularKitModule` from `design-angular-kit` to the root of the user's project.
  return addRootImport(options.project, ({ code, external }) => code`${external('DesignAngularKitModule', 'design-angular-kit')}`);
}
