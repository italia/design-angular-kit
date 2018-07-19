import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent, RadioGroupDirective } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';
import { BadgeDirective } from './badge/badge.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CheckboxComponent, ToggleComponent, RadioGroupDirective, RadioButtonComponent, BadgeDirective],
  exports: [CheckboxComponent, ToggleComponent, RadioGroupDirective, RadioButtonComponent, BadgeDirective]
})
export class DesignAngularKitModule { }
