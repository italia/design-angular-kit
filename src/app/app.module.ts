import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignAngularKitDocComponent } from './design-angular-kit-doc/design-angular-kit-doc.component';
import { CheckboxIndexComponent } from './checkbox/checkbox-index/checkbox-index.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignAngularKitDocComponent,
    CheckboxIndexComponent
  ],
  imports: [
    BrowserModule,
    DesignAngularKitModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
