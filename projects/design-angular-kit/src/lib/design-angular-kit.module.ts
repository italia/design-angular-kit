import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { PopoverDirective } from './popover/popover.directive';
import { PopoverComponent } from './popover/popover.component';
import { RadioButtonComponent, RadioGroupDirective } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';
import { BadgeDirective } from './badge/badge.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CheckboxComponent, ToggleComponent, RadioGroupDirective, RadioButtonComponent, BadgeDirective, PopoverDirective, PopoverComponent],
  exports: [CheckboxComponent, ToggleComponent, RadioGroupDirective, RadioButtonComponent, BadgeDirective, PopoverDirective],
  entryComponents: [PopoverComponent]
})
export class DesignAngularKitModule { }
