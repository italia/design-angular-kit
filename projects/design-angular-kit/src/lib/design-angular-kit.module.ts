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
    BreadcrumbComponent,
    BreadcrumbItemComponent
  ],
  entryComponents: [TooltipComponent]
})
export class DesignAngularKitModule { }
