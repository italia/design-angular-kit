import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AbstractComponent } from '../../../abstracts/abstract.component';
import { Modal } from 'bootstrap-italia';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

/**
 * Modal windows
 * @description To show featured content, notifications to users, or personalized content.
 */
@Component({
  selector: 'it-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  exportAs: 'itModal',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent extends AbstractComponent {

  /**
   * Show/Hide close button on header
   * @default true
   */
  @Input() closeButton: BooleanInput = true;

  /**
   * To correctly format the contents of the modal with icon
   * @default false
   */
  @Input() alertModal?: BooleanInput;

  /**
   * To correctly format the contents of the modal with Link List
   * @default false
   */
  @Input() dialogLinkList?: BooleanInput;

  /**
   * Modal type Popconfirm can be used for short confirmation messages.
   * @default false
   */
  @Input() popconfirm?: BooleanInput;

  /**
   * You can choose to use a scroll inside the modal, keeping the header and footer of the modal always visible
   * @default false
   */
  @Input() scrollable?: BooleanInput;

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
  @Input() alignment?: 'centered' | 'left' | 'right';

  /**
   * The modal size
   * @default undefined
   */
  @Input() size?: 'sm' | 'lg' | 'xl';

  /**
   * To better distinguish the footer element with a shadow
   * @default false
   */
  @Input() footerShadow?: BooleanInput;

  /**
   * This event fires immediately when the instance method show is called.
   */
  @Output() public onShow: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the modal has been made visible to the user (it will wait for CSS transitions to complete).
   */
  @Output() public onShown: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is raised immediately when the instance method hide has been called.
   */
  @Output() public onHide: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the modal has finished hiding from the user (it will wait for CSS transitions to complete).
   */
  @Output() public onHidden: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is fired when the modal is displayed, its background is static and a click outside the modal or a press
   * of the esc key occurs and data-bs-keyboard is set to false.
   */
  @Output() public onHidePrevented: EventEmitter<Event> = new EventEmitter();

  private modal?: Modal;

  @ViewChild('modalElement', { static: false }) private modalElement?: ElementRef<HTMLDivElement>;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'title');

    if (this.modalElement) {
      const element = this.modalElement.nativeElement;
      this.modal = Modal.getOrCreateInstance(element);

      element.addEventListener('show.bs.modal', event => this.onShow.emit(event));
      element.addEventListener('shown.bs.modal', event => this.onShown.emit(event));
      element.addEventListener('hide.bs.modal', event => this.onHide.emit(event));
      element.addEventListener('hidden.bs.modal', event => this.onHidden.emit(event));
      element.addEventListener('hidePrevented.bs.modal', event => this.onHidePrevented.emit(event));
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
