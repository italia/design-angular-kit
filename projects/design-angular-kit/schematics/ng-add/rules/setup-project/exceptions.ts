//new SchematicsException('messages.noProject(projectName)')

import { SchematicsException } from '@angular-devkit/schematics';

export class NoProjectException extends SchematicsException {
  constructor(project: string) {
    super(`Unable to find project '${project}' in the workspace`);
  }
}
