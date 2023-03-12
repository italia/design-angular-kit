import { NgModule } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AccordionComponent } from './core/accordion/accordion.component';
import { AlertComponent } from './core/alert/alert.component';
import { BadgeDirective } from './core/badge/badge.directive';
import { ButtonDirective } from './core/button/button.directive';
import { CalloutComponent } from './core/callout/callout.component';
import { CardComponent } from './core/card/card.component';
import { CarouselComponent } from './core/carousel/carousel/carousel.component';
import { CarouselItemComponent } from './core/carousel/carousel-item/carousel-item.component';
import { CollapseComponent } from './core/collapse/collapse.component';
import { DropdownComponent } from './core/dropdown/dropdown/dropdown.component';
import { DropdownItemComponent } from './core/dropdown/dropdown-item/dropdown-item.component';
import { LinkComponent } from './core/link/link.component';
import { ListComponent } from './core/list/list/list.component';
import { ListItemComponent } from './core/list/list-item/list-item.component';
import { ModalComponent } from './core/modal/modal.component';
import { NotificationsComponent } from './core/notifications/notifications.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { PopoverDirective } from './core/popover/popover.directive';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { ProgressButtonComponent } from './core/progress-button/progress-button.component';
import { RatingComponent } from './core/rating/rating.component';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { SteppersContainerComponent } from './core/steppers/steppers-container/steppers-container.component';
import { SteppersItemComponent } from './core/steppers/steppers-item/steppers-item.component';
import { TabContainerComponent } from './core/tab/tab-container/tab-container.component';
import { TabItemComponent } from './core/tab/tab-item/tab-item.component';
import { TableComponent } from './core/table/table.component';
import { TooltipDirective } from './core/tooltip/tooltip.directive';
import { CheckboxComponent } from './form/checkbox/checkbox.component';
import { InputComponent } from './form/input/input.component';
import { PasswordInputComponent } from './form/password-input/password-input.component';
import { RadioButtonComponent } from './form/radio-button/radio-button.component';
import { SelectComponent } from './form/select/select.component';
import { TextareaComponent } from './form/textarea/textarea.component';
import { UploadDragDropComponent } from './form/upload-drag-drop/upload-drag-drop.component';
import { UploadFileListComponent } from './form/upload-file-list/upload-file-list.component';
import { BackButtonComponent } from './navigation/back-button/back-button.component';
import { BackToTopComponent } from './navigation/back-to-top/back-to-top.component';
import { BreadcrumbComponent } from './navigation/breadcrumbs/breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './navigation/breadcrumbs/breadcrumb-item/breadcrumb-item.component';
import { HeaderComponent } from './navigation/header/header.component';
import { IconComponent } from './utils/icon/icon.component';
import { LanguageSwitcherComponent } from './utils/language-switcher/language-switcher.component';
import { NotFoundPageComponent } from './utils/not-found-page/not-found-page.component';
import { ChipComponent } from './core/chip/chip.component';
import { ForwardDirective } from './core/forward/forward.directive';
import { DimmerComponent } from './core/dimmer/dimmer.component';
import { DimmerButtonsComponent } from './core/dimmer/dimmer-buttons/dimmer-buttons.component';
import { DimmerIconComponent } from './core/dimmer/dimmer-icon/dimmer-icon.component';
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
  CarouselComponent,
  CarouselItemComponent,
  ChipComponent,
  CollapseComponent,
  DimmerButtonsComponent,
  DimmerComponent,
  DimmerIconComponent,
  DropdownComponent,
  DropdownItemComponent,
  ForwardDirective,
  LinkComponent,
  ListComponent,
  ListItemComponent,
  ModalComponent,
  NotificationsComponent,
  PaginationComponent,
  PopoverDirective,
  ProgressBarComponent,
  ProgressButtonComponent,
  RatingComponent,
  SpinnerComponent,
  SteppersContainerComponent,
  SteppersItemComponent,
  TabContainerComponent,
  TabItemComponent,
  TableComponent,
  TooltipDirective
];

/**
 * Form components
 */
const form = [
  CheckboxComponent,
  InputComponent,
  PasswordInputComponent,
  RadioButtonComponent,
  SelectComponent,
  TextareaComponent,
  UploadDragDropComponent,
  UploadFileListComponent
];

/**
 * Navigation Components
 */
const navigation = [
  BackButtonComponent,
  BackToTopComponent,
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  HeaderComponent
];

/**
 * Utils components
 */
const utils = [
  IconComponent,
  NotFoundPageComponent,
  LanguageSwitcherComponent,
  MarkMatchingTextPipe
];

@NgModule({
  declarations: [
    ...core,
    ...form,
    ...navigation,
    ...utils
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    RouterLink
  ],
  exports: [
    ...core,
    ...form,
    ...navigation,
    ...utils
  ]
})
export class ComponentsModule {
}
