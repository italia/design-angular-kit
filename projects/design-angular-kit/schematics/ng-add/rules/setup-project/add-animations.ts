import { callRule, noop, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function addAnimations(): Rule {
  //this dependency should be provided at application level instead of lib level. ref: provideDesignAngularKit
  //provideAnimationsAsync(),
  return (host: Tree, context: SchematicContext) => callRule(noop(), host, context);
}
