import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { BackToTopRoutingModule } from './back-to-top-routing.module';
import { BackToTopIndexComponent } from './back-to-top-index/back-to-top-index.component';
import { BackToTopExamplesComponent } from './back-to-top-examples/back-to-top-examples.component';
import { BackToTopButtonComponent } from './back-to-top-button/back-to-top-button.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, BackToTopRoutingModule],
  declarations: [BackToTopIndexComponent, BackToTopExamplesComponent, BackToTopButtonComponent],
})
export class BackToTopModule {}
