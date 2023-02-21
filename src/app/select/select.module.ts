import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SelectRoutingModule } from './select-routing.module';
import { SelectIndexComponent } from './select-index/select-index.component';
import { SelectExamplesComponent } from './select-examples/select-examples.component';
import { SelectExampleComponent } from './select-example/select-example.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SelectRoutingModule
  ],
  declarations: [SelectIndexComponent, SelectExamplesComponent, SelectExampleComponent]
})
export class SelectModule { }
