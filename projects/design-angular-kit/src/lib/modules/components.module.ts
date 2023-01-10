import { NgModule } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AbstractFormComponent } from '../abstracts/abstract-form-component';
import { AbstractComponent } from '../abstracts/abstract.component';
import { AccordionComponent } from '../components/core/accordion/accordion.component';
import { AlertComponent } from '../components/core/alert/alert.component'
import { BadgeDirective } from '../components/core/badge/badge.directive';
import { ButtonDirective } from '../components/core/button/button.directive';
import { CalloutComponent } from '../components/core/callout/callout.component';
import { CardComponent } from '../components/core/card/card.component';
import { CarouselComponent } from '../components/core/carousel/carousel/carousel.component';
import { CarouselItemComponent } from '../components/core/carousel/carousel-item/carousel-item.component';
import { CollapseComponent } from '../components/core/collapse/collapse.component';
import { DropdownComponent } from '../components/core/dropdown/dropdown/dropdown.component';
import { DropdownItemComponent } from '../components/core/dropdown/dropdown-item/dropdown-item.component';
import { LinkComponent } from '../components/core/link/link.component';
import { ListComponent } from '../components/core/list/list/list.component';
import { ListItemComponent } from '../components/core/list/list-item/list-item.component';
import { ModalComponent } from '../components/core/modal/modal.component';
import { NotificationsComponent } from '../components/core/notifications/notifications.component';
import { PaginationComponent } from '../components/core/pagination/pagination.component';
import { PopoverDirective } from '../components/core/popover/popover.directive';
import { ProgressBarComponent } from '../components/core/progress-bar/progress-bar.component';
import { ProgressButtonComponent } from '../components/core/progress-button/progress-button.component';
import { SpinnerComponent } from '../components/core/spinner/spinner.component';
import { TabContainerComponent } from '../components/core/tab/tab-container/tab-container.component';
import { TabItemComponent } from '../components/core/tab/tab-item/tab-item.component';
import { TableComponent } from '../components/core/table/table.component';
import { TooltipDirective } from '../components/core/tooltip/tooltip.directive';
import { CheckboxComponent } from '../components/form/checkbox/checkbox.component';
import { InputComponent } from '../components/form/input/input.component';
import { PasswordInputComponent } from '../components/form/password-input/password-input.component';
import { RadioButtonComponent } from '../components/form/radio-button/radio-button.component';
import { SelectComponent } from '../components/form/select/select.component';
import { TextareaComponent } from '../components/form/textarea/textarea.component';
import { UploadDragDropComponent } from '../components/form/upload-drag-drop/upload-drag-drop.component';
import { UploadFileListComponent } from '../components/form/upload-file-list/upload-file-list.component';
import { BackButtonComponent } from '../components/navigation/back-button/back-button.component';
import { BackToTopComponent } from '../components/navigation/back-to-top/back-to-top.component';
import { BreadcrumbComponent } from '../components/navigation/breadcrumbs/breadcrumb/breadcrumb.component';
import {
  BreadcrumbItemComponent
} from '../components/navigation/breadcrumbs/breadcrumb-item/breadcrumb-item.component';
import { HeaderComponent } from '../components/navigation/header/header.component';
import { IconComponent } from '../components/utils/icon/icon.component';
import { NotFoundPageComponent } from '../components/utils/not-found-page/not-found-page.component';
import { ChipComponent } from '../components/core/chip/chip.component';
import { ForwardDirective } from '../components/core/forward/forward.directive';
import { DimmerComponent } from '../components/core/dimmer/dimmer.component';
import { DimmerButtonsComponent } from '../components/core/dimmer/dimmer-buttons/dimmer-buttons.component';
import { DimmerIconComponent } from '../components/core/dimmer/dimmer-icon/dimmer-icon.component';
import { CalloutBigTextComponent } from '../components/core/callout/callout-big-text/callout-big-text.component';
import { CalloutHeaderComponent } from '../components/core/callout/callout-header/callout-header.component';


/**
 * Core components
 */
const core = [
  AccordionComponent,
  AlertComponent,
  BadgeDirective,
  ButtonDirective,
  CalloutBigTextComponent,
  CalloutComponent,
  CalloutHeaderComponent,
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
  SpinnerComponent,
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
  NotFoundPageComponent
];

@NgModule({
  declarations: [
    AbstractComponent,
    AbstractFormComponent,
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
