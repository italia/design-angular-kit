import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { RadioRoutingModule } from './radio-routing.module';
import { RadioIndexComponent } from './radio-index/radio-index.component';
import { RadioExampleComponent } from './radio-example/radio-example.component';
import { RadioExamplesComponent } from './radio-examples/radio-examples.component';
import { RadioCheckedExampleComponent } from './radio-checked-example/radio-checked-example.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RadioRoutingModule
  ],
  declarations: [RadioIndexComponent, RadioExampleComponent, RadioExamplesComponent, RadioCheckedExampleComponent]
})
export class RadioModule { }
