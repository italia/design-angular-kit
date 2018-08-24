import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormInputRoutingModule } from './form-input-routing.module';
import { FormInputExampleComponent } from './form-input-example/form-input-example.component';
import { FormInputExamplesComponent } from './form-input-examples/form-input-examples.component';
import { FormInputIndexComponent } from './form-input-index/form-input-index.component';
import { SharedModule } from '../shared/shared.module';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DesignAngularKitModule,
    SharedModule,
    FormInputRoutingModule
  ],
  declarations: [FormInputExampleComponent, FormInputExamplesComponent, FormInputIndexComponent]
})
export class FormInputModule { }
