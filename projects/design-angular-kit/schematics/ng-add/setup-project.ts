import { chain, Rule } from '@angular-devkit/schematics';

import { addAnimations, addDesignAngularKitPure, addHttpClient, addImportToStyleFile } from './rules/setup-project';
import { Schema } from './schema';

export default function (options: Schema): Rule {
  return () => {
    return chain([
      addAnimations(),
      addHttpClient(),
      addDesignAngularKitPure(options),
      // addDesignAngularKit({ mainFilePath, projectName }),
      addImportToStyleFile(options),
    ]);
  };
}
