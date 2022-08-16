import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RadioButtonComponent, RadioGroupDirective } from './radio/radio.component';
import { ToggleComponent } from './toggle/toggle.component';

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
import { IconComponent } from './icon/icon.component';
import { ItPrefixDirective } from './form-input/it-prefix.directive';
import { ItSuffixDirective } from './form-input/it-suffix.directive';
import { ItTextPrefixDirective } from './form-input/it-text-prefix.directive';
import { ItTextSuffixDirective } from './form-input/it-text-suffix.directive';
import { ItPopoverModule } from './popover/popover.module';
import { ItTooltipModule } from './tooltip/tooltip.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ItPopoverModule,
        ItTooltipModule
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
        CollapseDirective,
        CollapseItemComponent,
        CollapseGroupComponent,
        FormInputComponent,
        DropdownComponent,
        DropdownItemComponent,
        DropdownHeaderComponent,
        DropdownDividerComponent,
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        IconComponent,
        ItPrefixDirective,
        ItSuffixDirective,
        ItTextPrefixDirective,
        ItTextSuffixDirective
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
        CollapseDirective,
        CollapseItemComponent,
        CollapseGroupComponent,
        FormInputComponent,
        DropdownComponent,
        DropdownItemComponent,
        DropdownHeaderComponent,
        DropdownDividerComponent,
        BreadcrumbComponent,
        BreadcrumbItemComponent,
        IconComponent,
        ItPrefixDirective,
        ItSuffixDirective,
        ItTextPrefixDirective,
        ItTextSuffixDirective,
        ItPopoverModule,
        ItTooltipModule
    ]
})
export class DesignAngularKitModule {}
