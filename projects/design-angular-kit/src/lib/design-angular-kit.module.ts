import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RadioButtonComponent, RadioGroupDirective } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';
import { BadgeDirective } from './badge/badge.directive';
import { FormInputComponent } from './form-input/form-input.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb/breadcrumb-item.component';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabComponent } from './tabs/tab.component';
import { ItPrefixDirective } from './form-input/it-prefix.directive';
import { ItSuffixDirective } from './form-input/it-suffix.directive';
import { ItTextPrefixDirective } from './form-input/it-text-prefix.directive';
import { ItTextSuffixDirective } from './form-input/it-text-suffix.directive';
import { ItPopoverModule } from './popover/popover.module';
import { ItTooltipModule } from './tooltip/tooltip.module';
import { ItButtonDirective } from './button/button.directive';
import { ItCollapseModule } from './collapse/collapse.module';
import { ItDropdownModule } from './dropdown/dropdown.module';
import { ItIconModule } from './icon/icon.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ItPopoverModule,
        ItTooltipModule,
        ItCollapseModule,
        ItDropdownModule,
        ItIconModule
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
        FormInputComponent,
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        ItPrefixDirective,
        ItSuffixDirective,
        ItTextPrefixDirective,
        ItTextSuffixDirective,
        ItButtonDirective,

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
        ItButtonDirective,
        FormInputComponent,
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        ItIconModule,
        ItPrefixDirective,
        ItSuffixDirective,
        ItTextPrefixDirective,
        ItTextSuffixDirective,
        ItPopoverModule,
        ItTooltipModule,
        ItCollapseModule,
        ItDropdownModule
    ]
})
export class DesignAngularKitModule {}
