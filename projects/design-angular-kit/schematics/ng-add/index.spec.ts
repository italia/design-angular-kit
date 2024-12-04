import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { Schema as SchematicOptions } from './schema';

describe(`ng add design-angular-kit`, () => {
  const collectionPath = path.join(__dirname, '../collection.json');
  const runner = new SchematicTestRunner('schematics', collectionPath);

  const defaultOptions: SchematicOptions = {
    project: 'test-project', // Set your default project name
  };

  let appTree: UnitTestTree;

  beforeEach(async () => {
    // Simulate an Angular workspace project before running the schematic
    appTree = await runner.runExternalSchematic('@schematics/angular', 'workspace', {
      name: 'workspace',
      version: '6.0.0',
      newProjectRoot: 'projects',
    });

    appTree = await runner.runExternalSchematic(
      '@schematics/angular',
      'application',
      {
        name: defaultOptions.project,
        standalone: false,
      },
      appTree
    );
  });

  it('should add DesignAngularKitModule to package.json', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, appTree);

    // Check if the package.json file exists
    const packageJsonPath = '/package.json';
    expect(tree.files).toContain(packageJsonPath);

    // Check if the correct dependency was added
    const content = tree.readContent(packageJsonPath);
    expect(content).toContain(`"design-angular-kit"`);
  });
});
