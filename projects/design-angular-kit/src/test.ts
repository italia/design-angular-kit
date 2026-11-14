// Shared test helpers. The TestBed environment is initialized by the Angular unit-test builder (Vitest).

import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IT_ASSET_BASE_PATH } from './lib/interfaces/design-angular-kit-config';
export const tb_base = {
  providers: [
    provideRouter([]),
    importProvidersFrom(TranslateModule.forRoot()),
    {
      provide: IT_ASSET_BASE_PATH,
      useValue: './bootstrap-italia',
    },
  ],
};
