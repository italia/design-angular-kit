import { NgModule } from '@angular/core';
import { AccordionComponent } from './core/accordion/accordion.component';
import { AlertComponent } from './core/alert/alert.component';
import { BadgeDirective } from './core/badge/badge.directive';
import { ButtonDirective } from './core/button/button.directive';
import { CalloutComponent } from './core/callout/callout.component';
import { CardComponent } from './core/card/card.component';
import { CarouselModule } from './core/carousel/carousel.module';
import { CollapseComponent } from './core/collapse/collapse.component';
import { DimmerModule } from './core/dimmer/dimmer.module';
import { DropdownModule } from './core/dropdown/dropdown.module';
import { LinkComponent } from './core/link/link.component';
import { ListModule } from './core/list/list.module';
import { ModalComponent } from './core/modal/modal.component';
import { NotificationsComponent } from './core/notifications/notifications.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { PopoverDirective } from './core/popover/popover.directive';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { ProgressButtonComponent } from './core/progress-button/progress-button.component';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { SteppersModule } from './core/steppers/steppers.module';
import { TabModule } from './core/tab/tab.module';
import { TableComponent } from './core/table/table.component';
import { TooltipDirective } from './core/tooltip/tooltip.directive';
import { FormModule } from './form/form.module';
import { BackButtonComponent } from './navigation/back-button/back-button.component';
import { BackToTopComponent } from './navigation/back-to-top/back-to-top.component';
import { BreadcrumbsModule } from './navigation/breadcrumbs/breadcrumbs.module';
import { HeaderComponent } from './navigation/header/header.component';
import { IconComponent } from './utils/icon/icon.component';
import { LanguageSwitcherComponent } from './utils/language-switcher/language-switcher.component';
import { ErrorPageComponent } from './utils/error-page/error-page.component';
import { ChipComponent } from './core/chip/chip.component';
import { ForwardDirective } from './core/forward/forward.directive';
import { MarkMatchingTextPipe } from '../pipes/mark-matching-text.pipe';


/**
 * Core components
 */
const core = [
  AccordionComponent,
  AlertComponent,
  BadgeDirective,
  ButtonDirective,
  CalloutComponent,
  CardComponent,
  CarouselModule,
  ChipComponent,
  CollapseComponent,
  DimmerModule,
  DropdownModule,
  ForwardDirective,
  LinkComponent,
  ListModule,
  ModalComponent,
  NotificationsComponent,
  PaginationComponent,
  PopoverDirective,
  ProgressBarComponent,
  ProgressButtonComponent,
  SpinnerComponent,
  SteppersModule,
  TabModule,
  TableComponent,
  TooltipDirective
];

/**
 * Navigation Components
 */
const navigation = [
  BackButtonComponent,
  BackToTopComponent,
  BreadcrumbsModule,
  HeaderComponent
];

/**
 * Utils components
 */
const utils = [
  ErrorPageComponent,
  IconComponent,
  LanguageSwitcherComponent,
  MarkMatchingTextPipe
];

@NgModule({
  imports: [
    ...core,
    FormModule, // Form components
    ...navigation,
    ...utils
  ],
  exports: [
    ...core,
    FormModule, // Form components
    ...navigation,
    ...utils
  ]
})
export class ComponentsModule {
}
