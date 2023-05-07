// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from './lib/components/components.module';
import { DESIGN_ANGULAR_KIT_CONFIG, DesignAngularKitConfig } from './lib/design-angular-kit-config';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(), {
    teardown: { destroyAfterEach: false }
  }
);

export const tb_base = {
  imports: [ComponentsModule, TranslateModule.forRoot(), RouterTestingModule], //FormsModule,ReactiveFormsModule
  providers: [
    {
      provide: DESIGN_ANGULAR_KIT_CONFIG,
      useValue: new DesignAngularKitConfig()
    }
  ]
};
