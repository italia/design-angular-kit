// Shared TestBed configuration for specs (the karma builder initializes the test environment)

import { RouterTestingModule } from '@angular/router/testing';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IT_ASSET_BASE_PATH } from './lib/interfaces/design-angular-kit-config';

// Silences expected console noise during tests: the library intentionally warns about
// deprecated selectors/inputs (exercised by the specs) and logs debug traces.
const originalWarn = console.warn.bind(console);
console.warn = (...args: unknown[]) => {
  if (typeof args[0] === 'string' && /deprecat/i.test(args[0])) {
    return;
  }
  originalWarn(...args);
};
console.debug = () => {};

export const tb_base = {
  imports: [RouterTestingModule], //FormsModule,ReactiveFormsModule
  providers: [
    importProvidersFrom(TranslateModule.forRoot()),
    {
      provide: IT_ASSET_BASE_PATH,
      useValue: './bootstrap-italia',
    },
  ],
};
