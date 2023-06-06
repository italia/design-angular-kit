import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ComponentsModule } from './components/components.module';
import { DESIGN_ANGULAR_KIT_CONFIG, DesignAngularKitConfig } from './design-angular-kit-config';
import { DesignAngularKitInit } from './interfaces/design-angular-kit-init';

@NgModule({
  imports: [
    ComponentsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, '/bootstrap-italia/i18n/'),
        deps: [HttpClient]
      },
      extend: true,
      isolate: false,
      defaultLanguage: 'it'
    })
  ],
  exports: [
    ComponentsModule,
    TranslateModule
  ]
})
export class DesignAngularKitModule {

  static forRoot(initConfig?: DesignAngularKitInit): ModuleWithProviders<DesignAngularKitModule> {
    return {
      ngModule: DesignAngularKitModule,
      providers: [
        {
          provide: DESIGN_ANGULAR_KIT_CONFIG,
          useValue: new DesignAngularKitConfig(initConfig)
        }
      ]
    };
  }

  constructor(
    private readonly translateService: TranslateService
  ) {
    translateService.addLangs(['it', 'en']); // Adds 'it' and 'eng' as available languages.
    translateService.use('it');
  }

}
