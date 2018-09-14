import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { PopoverDirective } from './popover/popover.directive';
import { PopoverComponent } from './popover/popover.component';
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
import { FormInputComponent } from './form-input/form-input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdown-item.component';
import { DropdownHeaderComponent } from './dropdown/dropdown-header.component';
import { DropdownDividerComponent } from './dropdown/dropdown-divider.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb/breadcrumb-item.component';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabComponent } from './tabs/tab.component';

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
    TabGroupComponent,
    TabComponent,
    ProgressBarComponent,
    ButtonComponent,
    TooltipDirective,
    TooltipComponent,
    CollapseDirective,
    CollapseItemComponent,
    CollapseGroupComponent,
    FormInputComponent,
    PopoverDirective,
    PopoverComponent,
    DropdownComponent,
    DropdownItemComponent,
    DropdownHeaderComponent,
    DropdownDividerComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent
  ],
  exports: [
    CheckboxComponent,
    ToggleComponent,
    RadioGroupDirective,
    RadioButtonComponent,
    BadgeDirective,
    TabGroupComponent,
    TabComponent,
    ProgressBarComponent,
    ButtonComponent,
    TooltipDirective,
    CollapseDirective,
    CollapseItemComponent,
    CollapseGroupComponent,
    FormInputComponent,
    PopoverDirective,
    DropdownComponent,
    DropdownItemComponent,
    DropdownHeaderComponent,
    DropdownDividerComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent
  ],
  entryComponents: [TooltipComponent, PopoverComponent]
})
export class DesignAngularKitModule { }
