import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ComponentsModule } from './modules/components.module';

@NgModule({
  declarations: [],
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
  ],
  providers: [TranslateStore]
})
export class DesignAngularKitModule {

  constructor(
    private readonly translateService: TranslateService
  ) {
    translateService.addLangs(['it', 'en']); // Adds 'it' and 'eng' as available languages.
    translateService.use('it');
  }

}
