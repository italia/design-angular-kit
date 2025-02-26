import { SchematicsException } from '@angular-devkit/schematics';

export class NoProjectException extends SchematicsException {
  constructor(project: string) {
    super(`Unable to find project '${project}' in the workspace`);
  }
}

export class NoMainFileException extends SchematicsException {
  constructor(project: string) {
    super(`Unable to find 'build.options.main' file path for project "${project}`);
  }
}
