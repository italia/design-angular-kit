import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { Modal } from 'bootstrap-italia';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Modal as BSModal } from 'bootstrap'

/**
 * Modal windows
 * @description To show featured content, notifications to users, or personalized content.
 */
@Component({
  standalone: true,
  selector: 'it-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  exportAs: 'itModal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule]
})
export class ItModalComponent extends ItAbstractComponent implements AfterViewInit {

  /**
   * Show/Hide close button on header
   * @default true
   */
  @Input() closeButton: BooleanInput = true;

  /**
   * To correctly format the contents of the modal with icon
   * @default false
   */
  @Input() alertModal: BooleanInput | undefined;

  /**
   * To correctly format the contents of the modal with Link List
   * @default false
   */
  @Input() dialogLinkList: BooleanInput | undefined;

  /**
   * Modal type Popconfirm can be used for short confirmation messages.
   * @default false
   */
  @Input() popconfirm: BooleanInput | undefined;

  /**
   * You can choose to use a scroll inside the modal, keeping the header and footer of the modal always visible
   * @default false
   */
  @Input() scrollable: BooleanInput | undefined;

  /**
   * To have modals that appear with fades
   * @default true
   */
  @Input() fade?: BooleanInput = true;

  /**
   * Modal alignment
   * - <b>centered</b>: to vertically center the modal
   * - <b>left</b>: to left-align the modal
   * - <b>right</b>: to right-align the modal
   * @default undefined
   */
  @Input() alignment: 'centered' | 'left' | 'right' | undefined;

  /**
   * The modal size
   * @default undefined
   */
  @Input() size: 'sm' | 'lg' | 'xl' | undefined;

  /**
   * Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn’t close the modal when clicked.
   * @default true
   */
  @Input() backdrop: 'static' | BooleanInput = true;

  /**
   * Puts the focus on the modal when initialized.
   * @default true
   */
  @Input() focus: BooleanInput = true;

  /**
   * Closes the modal when escape key is pressed.
   * @default true
   */
  @Input() keyboard: BooleanInput = true;

  /**
   * To better distinguish the footer element with a shadow
   * @default false
   */
  @Input() footerShadow: BooleanInput | undefined;

  /**
   * Modal options
   */
  @Input() options?: Partial<BSModal.Options>

  /**
   * This event fires immediately when the instance method show is called.
   */
  @Output() public showEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the modal has been made visible to the user (it will wait for CSS transitions to complete).
   */
  @Output() public shownEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is raised immediately when the instance method hide has been called.
   */
  @Output() public hideEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the modal has finished hiding from the user (it will wait for CSS transitions to complete).
   */
  @Output() public hiddenEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is fired when the modal is displayed, its background is static and a click outside the modal or a press
   * of the esc key occurs and data-bs-keyboard is set to false.
   */
  @Output() public hidePreventedEvent: EventEmitter<Event> = new EventEmitter();

  private modal?: Modal;

  @ViewChild('modalElement', { static: false }) private modalElement?: ElementRef<HTMLDivElement>;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'title');

    if (this.modalElement) {
      const element = this.modalElement.nativeElement;
      this.modal = Modal.getOrCreateInstance(element, {
        ...this.options,
        backdrop: this.backdrop === 'static' ? 'static' : isTrueBooleanInput(this.backdrop),
        focus: isTrueBooleanInput(this.focus),
        keyboard: isTrueBooleanInput(this.keyboard)
      });

      element.addEventListener('show.bs.modal', event => this.showEvent.emit(event));
      element.addEventListener('shown.bs.modal', event => this.shownEvent.emit(event));
      element.addEventListener('hide.bs.modal', event => this.hideEvent.emit(event));
      element.addEventListener('hidden.bs.modal', event => this.hiddenEvent.emit(event));
      element.addEventListener('hidePrevented.bs.modal', event => this.hidePreventedEvent.emit(event));
    }
  }

  protected get isCloseButton(): boolean {
    return isTrueBooleanInput(this.closeButton);
  }

  protected get isFooterShadow(): boolean {
    return isTrueBooleanInput(this.footerShadow);
  }

  protected get modalClass(): string {
    let modalClass = 'modal';
    if (isTrueBooleanInput(this.fade)) {
      modalClass += ` fade`;
    }
    if (isTrueBooleanInput(this.alertModal)) {
      modalClass += ` alert-modal`;
    }
    if (isTrueBooleanInput(this.dialogLinkList)) {
      modalClass += ` it-dialog-link-list`;
    }
    if (isTrueBooleanInput(this.popconfirm)) {
      modalClass += ` popconfirm-modal`;
    }
    if (isTrueBooleanInput(this.scrollable)) {
      modalClass += ` it-dialog-scrollable`;
    }
    return modalClass;
  }

  protected get dialogClass(): string {
    let dialogClass = 'modal-dialog';
    if (this.alignment) {
      dialogClass += ` modal-dialog-${this.alignment}`;
    }
    if (this.size) {
      dialogClass += ` modal-${this.size}`;
    }
    return dialogClass;
  }

  /**
   * Manually activate/deactivate a modal. Returns to the caller before the modal has actually been shown or hidden
   */
  public toggle(): void {
    this.modal?.toggle();
  }

  /**
   * Manually open a modal. Returns to the caller before the modal has actually been displayed
   */
  public show(): void {
    this.modal?.show();
  }

  /**
   * Manually hide a modal. Returns to the caller before the modal has actually been hidden
   */
  public hide(): void {
    this.modal?.hide();
  }

  /**
   * Manually reposition the modal if the height of the modal changes when it is opened (in case a scroll bar appears).
   */
  public handleUpdate(): void {
    this.modal?.handleUpdate();
  }

  /**
   * Destroys the modal of an element.
   */
  public dispose(): void {
    this.modal?.dispose();
  }

}
