import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { BackButtonRoutingModule } from './back-button-routing.module';
import { BackButtonIndexComponent } from './back-button-index/back-button-index.component';
import { BackButtonExamplesComponent } from './back-button-examples/back-button-examples.component';
import { BackButtonLinkComponent } from './back-button-link/back-button-link.component';
import { BackButtonButtonComponent } from './back-button-button/back-button-button.component';
import { BackButtonOnlyIconComponent } from './back-button-only-icon/back-button-only-icon.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    BackButtonRoutingModule
  ],
  declarations: [
    BackButtonIndexComponent,
    BackButtonExamplesComponent,
    BackButtonLinkComponent,
    BackButtonButtonComponent,
    BackButtonOnlyIconComponent
  ]
})
export class BackButtonModule { }
