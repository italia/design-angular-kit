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
import { CollapseDirective } from './collapse/collapse.directive';
import { CollapseItemComponent } from './collapse/collapse-item.component';
import { CollapseGroupComponent } from './collapse/collapse-group.component';

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
    CollapseDirective,
    CollapseItemComponent,
    CollapseGroupComponent
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
    CollapseDirective,
    CollapseItemComponent,
    CollapseGroupComponent
  ],
  entryComponents: [TooltipComponent]
})
export class DesignAngularKitModule { }
