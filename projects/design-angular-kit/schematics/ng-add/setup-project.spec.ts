import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { Schema } from './schema';

const createApp = async (
  runner: SchematicTestRunner,
  options: Schema,
  { standalone, style }: { standalone: boolean; style: 'scss' | 'css' | 'sass' }
) => {
  let tree = await runner.runExternalSchematic('@schematics/angular', 'workspace', {
    name: 'workspace',
    version: '18.0.0',
    newProjectRoot: 'projects',
  });

  tree = await runner.runExternalSchematic(
    '@schematics/angular',
    'application',
    {
      name: options.project,
      standalone,
      style,
    },
    tree
  );

  return { tree };
};

describe(`ng add design-angular-kit | setup-project - library providing`, () => {
  const collectionPath = path.join(__dirname, '../collection.json');
  const runner = new SchematicTestRunner('schematics', collectionPath);

  const defaultOptions: Schema = {
    project: 'test-project', // Set your default project name
  };

  it('should add DesignAngularKitModule to the root module - NgModule app', async () => {
    const { tree: appTree } = await createApp(runner, defaultOptions, { standalone: false, style: 'scss' });
    const tree = await runner.runSchematic('ng-add-setup-project', defaultOptions, appTree);

    // Check if the app.module.ts file exists
    const modulePath = '/projects/test-project/src/app/app.module.ts';
    expect(tree.files).toContain(modulePath);

    // Check if the correct import statement was added
    const content = tree.readContent(modulePath);
    expect(content).toContain(`import { DesignAngularKitModule } from 'design-angular-kit';`);
    expect(content).toContain(`DesignAngularKitModule.forRoot()`);
  });

  it('should add provideDesignAngularKit() to the app config - Standalone app', async () => {
    const { tree: appTree } = await createApp(runner, defaultOptions, { standalone: true, style: 'scss' });
    const tree = await runner.runSchematic('ng-add-setup-project', defaultOptions, appTree);

    // Check if the app.module.ts file exists
    const appConfigPath = '/projects/test-project/src/app/app.config.ts';
    expect(tree.files).toContain(appConfigPath);

    // Check if the correct import statement was added
    const content = tree.readContent(appConfigPath);
    expect(content).toContain(`import { provideDesignAngularKit } from 'design-angular-kit';`);
    expect(content).toContain(`provideDesignAngularKit()`);
  });
});

for (const standalone of [true, false]) {
  describe(`ng add design-angular-kit | setup-project for ${standalone ? 'standalone' : 'NgModule'} app - styles`, () => {
    const collectionPath = path.join(__dirname, '../collection.json');
    const runner = new SchematicTestRunner('schematics', collectionPath);

    const defaultOptions: Schema = {
      project: 'test-project', // Set your default project name
    };

    it('should add .scss import to project style file', async () => {
      const { tree: appTree } = await createApp(runner, defaultOptions, { standalone, style: 'scss' });
      const tree = await runner.runSchematic('ng-add-setup-project', defaultOptions, appTree);

      // Check if the styles.scss file exists
      const styleFilePath = '/projects/test-project/src/styles.scss';
      expect(tree.files).toContain(styleFilePath);
      // Check if the correct import statement was added
      const content = tree.readContent(styleFilePath);
      expect(content).toContain(`@import '../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss';`);
    });

    it('should add .sass import to project style file', async () => {
      const { tree: appTree } = await createApp(runner, defaultOptions, { standalone, style: 'sass' });
      const tree = await runner.runSchematic('ng-add-setup-project', defaultOptions, appTree);

      // Check if the styles.sass file exists
      const styleFilePath = '/projects/test-project/src/styles.sass';
      expect(tree.files).toContain(styleFilePath);
      // Check if the correct import statement was added
      const content = tree.readContent(styleFilePath);
      expect(content).toContain(`@import 'bootstrap-italia/scss/bootstrap-italia'`);
    });

    it('should add .css import to angular.json', async () => {
      const { tree: appTree } = await createApp(runner, defaultOptions, { standalone, style: 'css' });
      const tree = await runner.runSchematic('ng-add-setup-project', defaultOptions, appTree);

      // Check if the angular.json file exists
      const angularJsonPath = '/angular.json';
      expect(tree.files).toContain(angularJsonPath);
      // Check if the correct import statement was added
      const content = tree.readContent(angularJsonPath);
      expect(content).toContain(`node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css`);
    });
  });

  describe(`ng add design-angular-kit | setup-project for ${standalone ? 'standalone' : 'NgModule'} app - assets`, () => {
    const collectionPath = path.join(__dirname, '../collection.json');
    const runner = new SchematicTestRunner('schematics', collectionPath);

    const defaultOptions: Schema = {
      project: 'test-project', // Set your default project name
    };

    it('should add bootstrap italia assets to angular.json', async () => {
      const { tree: appTree } = await createApp(runner, defaultOptions, { standalone, style: 'css' });
      const tree = await runner.runSchematic('ng-add-setup-project', defaultOptions, appTree);

      // Check if the angular.json file exists
      const angularJsonPath = '/angular.json';
      expect(tree.files).toContain(angularJsonPath);
      // Check if the correct import statement was added
      const content = tree.readContent(angularJsonPath);
      //"./node_modules/bootstrap-italia/"
      expect(content).toContain(`./node_modules/bootstrap-italia/`);
      const angularJson = JSON.parse(content);
      const assetsConfig = angularJson.projects[defaultOptions.project]?.architect?.build?.options?.assets?.find(
        (item: { input: string }) => item.input === `./node_modules/bootstrap-italia/`
      );
      expect(assetsConfig).toBeDefined(assetsConfig);
    });
  });

  describe(`ng add design-angular-kit | setup-project for ${standalone ? 'standalone' : 'NgModule'} app - localisation`, () => {
    const collectionPath = path.join(__dirname, '../collection.json');
    const runner = new SchematicTestRunner('schematics', collectionPath);

    const defaultOptions: Schema = {
      project: 'test-project', // Set your default project name
    };

    it('should add bootstrap italia localisation to angular.json', async () => {
      const { tree: appTree } = await createApp(runner, defaultOptions, { standalone, style: 'css' });
      const tree = await runner.runSchematic('ng-add-setup-project', defaultOptions, appTree);

      // Check if the angular.json file exists
      const angularJsonPath = '/angular.json';
      expect(tree.files).toContain(angularJsonPath);
      // Check if the correct import statement was added
      const content = tree.readContent(angularJsonPath);
      //"./node_modules/bootstrap-italia/"
      expect(content).toContain(`/node_modules/design-angular-kit/assets/i18n`);
      const angularJson = JSON.parse(content);
      const assetsConfig = angularJson.projects[defaultOptions.project]?.architect?.build?.options?.assets?.find(
        (item: { input: string }) => item.input === `./node_modules/design-angular-kit/assets/i18n`
      );
      expect(assetsConfig).toBeDefined(assetsConfig);
    });
  });
}
