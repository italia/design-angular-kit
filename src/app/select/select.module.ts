import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SelectRoutingModule } from './select-routing.module';
import { SelectIndexComponent } from './select-index/select-index.component';
import { SelectExamplesComponent } from './select-examples/select-examples.component';
import { SelectExampleComponent } from './select-example/select-example.component';
import { SelectGroupExampleComponent } from './select-group-example/select-group-example.component';
import { SelectDisabledExampleComponent } from './select-disabled-example/select-disabled-example.component';
import { SelectFormgroupExampleComponent } from './select-formgroup-example/select-formgroup-example.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedModule, SelectRoutingModule],
  declarations: [
    SelectIndexComponent,
    SelectDisabledExampleComponent,
    SelectGroupExampleComponent,
    SelectExamplesComponent,
    SelectExampleComponent,
    SelectFormgroupExampleComponent,
  ],
})
export class SelectModule {}
