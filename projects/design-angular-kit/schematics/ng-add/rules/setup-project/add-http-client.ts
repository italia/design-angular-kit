import { Rule, SchematicContext, Tree, callRule, noop } from '@angular-devkit/schematics';

export function addHttpClient(): Rule {
  //this dependency should be provided at application level instead of lib level. ref: provideDesignAngularKit
  //provideHttpClient(),
  return (host: Tree, context: SchematicContext) => callRule(noop(), host, context);
}
