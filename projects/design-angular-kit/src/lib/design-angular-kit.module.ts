import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { PopoverDirective } from './popover/popover.directive';
import { PopoverComponent } from './popover/popover.component';
import { RadioButtonComponent, RadioGroupDirective } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CheckboxComponent, ToggleComponent, PopoverDirective, PopoverComponent, RadioGroupDirective, RadioButtonComponent],
  exports: [CheckboxComponent, ToggleComponent, PopoverDirective, RadioGroupDirective, RadioButtonComponent],
  entryComponents: [PopoverComponent]
})
export class DesignAngularKitModule { }
