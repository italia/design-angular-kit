import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxExamplesComponent } from './checkbox-examples/checkbox-examples.component';
import { CheckboxExampleComponent } from './checkbox-example/checkbox-example.component';
import { CheckboxIndexComponent } from './checkbox-index/checkbox-index.component';
import { CheckboxExampleInlineComponent } from './checkbox-example-inline/checkbox-example-inline.component';
import { CheckboxExampleGroupComponent } from './checkbox-example-group/checkbox-example-group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CheckboxRoutingModule
  ],
  declarations: [ CheckboxExampleComponent, CheckboxExamplesComponent, CheckboxIndexComponent,
                  CheckboxExampleInlineComponent, CheckboxExampleGroupComponent]
})
export class CheckboxModule { }
