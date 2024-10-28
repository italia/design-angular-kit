import { chain, Rule } from '@angular-devkit/schematics';

import { addAnimations, addAssets, addDesignAngularKit, addHttpClient, addImportToStyleFile, addLocalisation } from './rules/setup-project';
import { Schema } from './schema';

export default function (options: Schema): Rule {
  return () =>
    chain([
      addAnimations(),
      addHttpClient(),
      addDesignAngularKit(options),
      addImportToStyleFile(options),
      addAssets(options),
      addLocalisation(options),
    ]);
}
