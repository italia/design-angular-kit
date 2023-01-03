import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ForwardRoutingModule } from './forward-routing.module';
import { ForwardExampleComponent } from './forward-example/forward-example.component';
import { ForwardExamplesComponent } from './forward-examples/forward-examples.component';
import { ForwardIndexComponent } from './forward-index/forward-index.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ForwardRoutingModule
  ],
  declarations: [ForwardExampleComponent, ForwardExamplesComponent, ForwardIndexComponent]
})
export class ForwardModule { }
