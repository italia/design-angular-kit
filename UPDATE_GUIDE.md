# Update guide

## Read Angular Guide

First of all, read Angular update guide at this [link](https://angular.dev/update-guide);

You can directly read the guide using the actual version and the target version as parameter of the resurce.

For example:

```
https://angular.dev/update-guide?v=20.0-21.0&l=3
```

where 20.0 is the actual version, 21.0 is the target version.

## Devcontainer update

In devcontainer, change the version of the feature. Set version property to your target.

```json
...
    "ghcr.io/devcontainers-extra/features/angular-cli:2": {
      "version": "21"
    },
...
```

After that, rebuild your devcontainer.

## Update depencencies

You have to update `@angular/core` and `@angular/cli` using your console. Remember to define the target version.

For example:

```bash
ng update @angular/core@21 @angular/cli@21
```

## Update the `ng add` schematics

The `ng add design-angular-kit` schematics live in `projects/design-angular-kit/schematics` and map the Angular version of the target project to the library version to install. They are not touched by `ng update`, so update them by hand for every new Angular major version (for example 22 to 23):

1. In `schematics/ng-add/versions-helper.ts`:
   - add the new major to `ANGULAR_VERSIONS` (for example `v23: '23'`)
   - add the matching entry to `versionsMap` (for example `` [ANGULAR_VERSIONS.v23]: `^23.0.0` ``)
   - set `DEFAULT` and `LATEST` to the new range
   - use the new major in the comparison inside `getPackageVersion`, so that newer unknown majors fall back to `LATEST`
2. In `schematics/ng-add/index.ts`, set `NG_LATEST_VERSION` to the new major (for example `'23.0.0'`).
3. In `projects/design-angular-kit/package.json`, set the `@angular/*` `peerDependencies` to the new major.
4. In `schematics/ng-add/versions-helper.spec.ts`, add a test for the new major and update the one for versions newer than the latest supported.
5. Run `npm run schematics:test` and `npm run build:lib`.
