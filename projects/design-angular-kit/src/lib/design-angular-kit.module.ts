import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent, RadioGroupDirective } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CheckboxComponent, ToggleComponent, RadioGroupDirective, RadioButtonComponent],
  exports: [CheckboxComponent, ToggleComponent, RadioGroupDirective, RadioButtonComponent]
})
export class DesignAngularKitModule { }
