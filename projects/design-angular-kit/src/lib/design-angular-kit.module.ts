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
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdown-item.component';
import { DropdownHeaderComponent } from './dropdown/dropdown-header.component';
import { DropdownDividerComponent } from './dropdown/dropdown-divider.component';

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
    TooltipComponent,
    DropdownComponent,
    DropdownItemComponent,
    DropdownHeaderComponent,
    DropdownDividerComponent
  ],
  exports: [
    CheckboxComponent,
    ToggleComponent,
    RadioGroupDirective,
    RadioButtonComponent,
    BadgeDirective,
    ProgressBarComponent,
    ButtonComponent,
    TooltipDirective,
    DropdownComponent,
    DropdownItemComponent,
    DropdownHeaderComponent,
    DropdownDividerComponent
  ],
  entryComponents: [TooltipComponent]
})
export class DesignAngularKitModule { }
