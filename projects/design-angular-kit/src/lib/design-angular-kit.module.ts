import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
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
      defaultLanguage: 'it'
    })],
  exports: [ComponentsModule]
})
export class DesignAngularKitModule {
}