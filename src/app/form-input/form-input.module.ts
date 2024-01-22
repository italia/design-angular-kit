import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormInputRoutingModule } from './form-input-routing.module';
import { FormInputExampleComponent } from './form-input-example/form-input-example.component';
import { FormInputExamplesComponent } from './form-input-examples/form-input-examples.component';
import { FormInputIndexComponent } from './form-input-index/form-input-index.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TemplateDrivenValidationExampleComponent
} from './template-driven-validation-example/template-driven-validation-example.component';
import { ModelDrivenValidationExampleComponent } from './model-driven-validation-example/model-driven-validation-example.component';
import { FormInputIconExampleComponent } from './form-input-icon/form-input-icon.component';
import { FormInputNumberExampleComponent } from './form-input-number/form-input-number.component';
import { FormInputCalendarExampleComponent } from './form-input-calendar/form-input-calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FormInputRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormInputExampleComponent,
    FormInputIconExampleComponent,
    FormInputExamplesComponent,
    FormInputIndexComponent,
    TemplateDrivenValidationExampleComponent,
    ModelDrivenValidationExampleComponent,
    FormInputNumberExampleComponent,
    FormInputCalendarExampleComponent,
  ]
})
export class FormInputModule { }
