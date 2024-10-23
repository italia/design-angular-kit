import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { Schema as SchematicOptions } from './schema';

describe(`ng add design-angular-kit - NgModule`, () => {
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

  it('should add DesignAngularKitModule to the root module', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, appTree);

    // Check if the app.module.ts file exists
    const modulePath = '/projects/test-project/src/app/app.module.ts';
    expect(tree.files).toContain(modulePath);

    // Check if the correct import statement was added
    const content = tree.readContent(modulePath);
    expect(content).toContain(`import { DesignAngularKitModule } from 'design-angular-kit';`);
    expect(content).toContain(`DesignAngularKitModule.forRoot()`);
  });
});

describe(`ng add design-angular-kit - standalone`, () => {
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
        standalone: true,
      },
      appTree
    );
  });

  it('should add provideDesignAngularKit() to the app config', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, appTree);

    // Check if the app.module.ts file exists
    const appConfigPath = '/projects/test-project/src/app/app.config.ts';
    expect(tree.files).toContain(appConfigPath);

    // Check if the correct import statement was added
    const content = tree.readContent(appConfigPath);
    expect(content).toContain(`import { provideDesignAngularKit } from 'design-angular-kit';`);
    expect(content).toContain(`provideDesignAngularKit()`);
  });
});
