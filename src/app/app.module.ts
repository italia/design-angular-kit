import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignAngularKitModule } from '../../projects/design-angular-kit/src/public_api';
import { DesignAngularKitDocComponent } from './design-angular-kit-doc/design-angular-kit-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignAngularKitDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignAngularKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
