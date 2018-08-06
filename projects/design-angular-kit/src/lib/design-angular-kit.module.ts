import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RadioButtonComponent, RadioGroupDirective } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonComponent } from './button/button.component';
import { BadgeDirective } from './badge/badge.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CheckboxComponent,
    ToggleComponent,
    RadioGroupDirective,
    RadioButtonComponent,
    BadgeDirective,
    ProgressBarComponent,
    ButtonComponent,
    TooltipDirective,
    TooltipComponent
  ],
  exports: [
    CheckboxComponent,
    ToggleComponent,
    RadioGroupDirective,
    RadioButtonComponent,
    BadgeDirective,
    ProgressBarComponent,
    ButtonComponent,
    TooltipDirective
  ],
  entryComponents: [TooltipComponent]
})
export class DesignAngularKitModule { }
