// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IT_ASSET_BASE_PATH } from './lib/interfaces/design-angular-kit-config'; // First, initialize the Angular testing environment.

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
  teardown: { destroyAfterEach: false },
});

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
