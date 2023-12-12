import { NgModule } from '@angular/core';
import { ItAccordionComponent } from './core/accordion/accordion.component';
import { ItAlertComponent } from './core/alert/alert.component';
import { ItAvatarDropDownItemComponent } from './core/avatar/avatar-dropdown/avatar-dropdown.component';
import { ItAvatarGroupItemComponent, ItAvatarGroupComponent } from './core/avatar/avatar-group/avatar-group.component';
import { ItAvatarDirective } from './core/avatar/avatar.directive'
import { ItBadgeDirective } from './core/badge/badge.directive';
import { ItButtonDirective } from './core/button/button.directive';
import { ItCalloutComponent } from './core/callout/callout.component';
import { ItCardComponent } from './core/card/card.component';
import { ItCarouselModule } from './core/carousel/carousel.module';
import { ItCollapseComponent } from './core/collapse/collapse.component';
import { ItDimmerModule } from './core/dimmer/dimmer.module';
import { ItDropdownModule } from './core/dropdown/dropdown.module';
import { ItLinkComponent } from './core/link/link.component';
import { ItListModule } from './core/list/list.module';
import { ItModalComponent } from './core/modal/modal.component';
import { ItNotificationsComponent } from './core/notifications/notifications.component';
import { ItPaginationComponent } from './core/pagination/pagination.component';
import { ItPopoverDirective } from './core/popover/popover.directive';
import { ItProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { ItProgressButtonComponent } from './core/progress-button/progress-button.component';
import { ItSpinnerComponent } from './core/spinner/spinner.component';
import { ItSteppersModule } from './core/steppers/steppers.module';
import { ItTabModule } from './core/tab/tab.module';
import { ItTableComponent } from './core/table/table.component';
import { ItTooltipDirective } from './core/tooltip/tooltip.directive';
import { ItFormModule } from './form/form.module';
import { ItBackButtonComponent } from './navigation/back-button/back-button.component';
import { ItBackToTopComponent } from './navigation/back-to-top/back-to-top.component';
import { ItBreadcrumbsModule } from './navigation/breadcrumbs/breadcrumbs.module';
import { ItHeaderComponent } from './navigation/header/header.component';
import { ItIconComponent } from './utils/icon/icon.component';
import { ItLanguageSwitcherComponent } from './utils/language-switcher/language-switcher.component';
import { ItErrorPageComponent } from './utils/error-page/error-page.component';
import { ItChipComponent } from './core/chip/chip.component';
import { ItForwardDirective } from './core/forward/forward.directive';
import { MarkMatchingTextPipe } from '../pipes/mark-matching-text.pipe';


/**
 * Core components
 */
const core = [
  ItAccordionComponent,
  ItAlertComponent,
  ItAvatarGroupItemComponent, 
  ItAvatarGroupComponent,
  ItAvatarDropDownItemComponent,
  ItAvatarDirective,
  ItBadgeDirective,
  ItButtonDirective,
  ItCalloutComponent,
  ItCardComponent,
  ItCarouselModule,
  ItChipComponent,
  ItCollapseComponent,
  ItDimmerModule,
  ItDropdownModule,
  ItForwardDirective,
  ItLinkComponent,
  ItListModule,
  ItModalComponent,
  ItNotificationsComponent,
  ItPaginationComponent,
  ItPopoverDirective,
  ItProgressBarComponent,
  ItProgressButtonComponent,
  ItSpinnerComponent,
  ItSteppersModule,
  ItTabModule,
  ItTableComponent,
  ItTooltipDirective
];

/**
 * Navigation Components
 */
const navigation = [
  ItBackButtonComponent,
  ItBackToTopComponent,
  ItBreadcrumbsModule,
  ItHeaderComponent
];

/**
 * Utils components
 */
const utils = [
  ItErrorPageComponent,
  ItIconComponent,
  ItLanguageSwitcherComponent,
  MarkMatchingTextPipe
];

@NgModule({
  imports: [
    ...core,
    ItFormModule, // Form components
    ...navigation,
    ...utils
  ],
  exports: [
    ...core,
    ItFormModule, // Form components
    ...navigation,
    ...utils
  ]
})
export class ItComponentsModule {
}
