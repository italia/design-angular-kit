import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent, RadioGroupDirective } from './radio/radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CheckboxComponent, RadioGroupDirective, RadioButtonComponent],
  exports: [CheckboxComponent, RadioGroupDirective, RadioButtonComponent]
})
export class DesignAngularKitModule { }
