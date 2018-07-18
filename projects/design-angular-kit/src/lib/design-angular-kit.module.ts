import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent, RadioGroupDirective } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CheckboxComponent, ToggleComponent, RadioGroupDirective, RadioButtonComponent, TooltipDirective, TooltipComponent],
  exports: [CheckboxComponent, ToggleComponent, RadioGroupDirective, RadioButtonComponent, TooltipDirective],
  entryComponents: [TooltipComponent]
})
export class DesignAngularKitModule { }
