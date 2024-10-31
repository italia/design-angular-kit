import { ModuleWithProviders, NgModule } from '@angular/core';
import { ItAccordionComponent } from './components/core/accordion/accordion.component';
import { ItAlertComponent } from './components/core/alert/alert.component';
import { ItAvatarModule } from './components/core/avatar/avatar.module';
import { ItBadgeDirective } from './components/core/badge/badge.directive';
import { ItButtonDirective } from './components/core/button/button.directive';
import { ItCalloutComponent } from './components/core/callout/callout.component';
import { ItCardComponent } from './components/core/card/card.component';
import { ItCarouselModule } from './components/core/carousel/carousel.module';
import { ItChipComponent } from './components/core/chip/chip.component';
import { ItCollapseComponent } from './components/core/collapse/collapse.component';
import { ItDimmerModule } from './components/core/dimmer/dimmer.module';
import { ItDropdownModule } from './components/core/dropdown/dropdown.module';
import { ItForwardDirective } from './components/core/forward/forward.directive';
import { ItLinkComponent } from './components/core/link/link.component';
import { ItListModule } from './components/core/list/list.module';
import { ItModalComponent } from './components/core/modal/modal.component';
import { ItNotificationsComponent } from './components/core/notifications/notifications.component';
import { ItPaginationComponent } from './components/core/pagination/pagination.component';
import { ItPopoverDirective } from './components/core/popover/popover.directive';
import { ItProgressBarComponent } from './components/core/progress-bar/progress-bar.component';
import { ItProgressButtonComponent } from './components/core/progress-button/progress-button.component';
import { ItSpinnerComponent } from './components/core/spinner/spinner.component';
import { ItSteppersModule } from './components/core/steppers/steppers.module';
import { ItTabModule } from './components/core/tab/tab.module';
import { ItTableModule } from './components/core/table/table.module';
import { ItTimelineModule } from './components/core/timeline/timeline.module';
import { ItTooltipDirective } from './components/core/tooltip/tooltip.directive';
import { ItFormModule } from './components/form/form.module';
import { ItBackButtonComponent } from './components/navigation/back-button/back-button.component';
import { ItBackToTopComponent } from './components/navigation/back-to-top/back-to-top.component';
import { ItBreadcrumbsModule } from './components/navigation/breadcrumbs/breadcrumbs.module';
import { ItHeaderComponent } from './components/navigation/header/header.component';
import { ItMegamenuComponent } from './components/navigation/megamenu/megamenu.component';
import { ItNavBarModule } from './components/navigation/navbar/navbar.module';
import { ItNavscrollComponent } from './components/navigation/navscroll/navscroll.component';
import { ItSidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { ItErrorPageComponent } from './components/utils/error-page/error-page.component';
import { ItIconComponent } from './components/utils/icon/icon.component';
import { ItLanguageSwitcherComponent } from './components/utils/language-switcher/language-switcher.component';
import { DesignAngularKitConfig } from './interfaces/design-angular-kit-config';
import { ItDateAgoPipe } from './pipes/date-ago.pipe';
import { ItDurationPipe } from './pipes/duration.pipe';
import { ItMarkMatchingTextPipe } from './pipes/mark-matching-text.pipe';
import { provideDesignAngularKit } from './provide-design-angular-kit';

/**
 * Core components
 */
const core = [
  ItAccordionComponent,
  ItAlertComponent,
  ItAvatarModule,
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
  ItTableModule,
  ItTooltipDirective,
  ItTimelineModule,
];

/**
 * Navigation Components
 */
const navigation = [
  ItBackButtonComponent,
  ItBackToTopComponent,
  ItBreadcrumbsModule,
  ItHeaderComponent,
  ItNavBarModule,
  ItSidebarComponent,
  ItMegamenuComponent,
  ItNavscrollComponent,
];

/**
 * Utils components
 */
const utils = [ItErrorPageComponent, ItIconComponent, ItLanguageSwitcherComponent];

/**
 * Library pipes
 */
const pipes = [ItDateAgoPipe, ItDurationPipe, ItMarkMatchingTextPipe];

const components = [
  ...core, // Core components
  ItFormModule, // Form components
  ...navigation, // Navigation Components
  ...utils, // Utils components
  ...pipes, // Library pipes
];

@NgModule({
  imports: components,
  exports: components,
})
export class DesignAngularKitModule {
  public static forRoot(config?: DesignAngularKitConfig): ModuleWithProviders<DesignAngularKitModule> {
    return {
      ngModule: DesignAngularKitModule,
      providers: [provideDesignAngularKit(config)],
    };
  }

  public static forChild(): ModuleWithProviders<DesignAngularKitModule> {
    return {
      ngModule: DesignAngularKitModule,
    };
  }
}
