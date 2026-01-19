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
