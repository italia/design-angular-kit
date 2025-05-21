import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { FooterRoutingModule } from './footer-routing.module';
import { FooterIndexComponent } from './footer-index/footer-index.component';
import { FooterExamplesComponent } from './footer-examples/footer-examples.component';
import { FooterButtonComponent } from './footer-simple/footer-simple.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, FooterRoutingModule],
  declarations: [FooterIndexComponent, FooterExamplesComponent, FooterButtonComponent],
})
export class FooterModule {}
