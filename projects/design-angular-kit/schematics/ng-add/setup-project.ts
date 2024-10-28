import { chain, Rule } from '@angular-devkit/schematics';

import { addAnimations, addDesignAngularKit, addHttpClient, addImportToStyleFile } from './rules/setup-project';
import { Schema } from './schema';

export default function (options: Schema): Rule {
  return () => chain([addAnimations(), addHttpClient(), addDesignAngularKit(options), addImportToStyleFile(options)]);
}
