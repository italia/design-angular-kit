import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AbstractComponent } from '../../../abstracts/abstract.component';
import { Modal } from 'bootstrap-italia';

@Component({
  selector: 'it-modal[id][title]',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  exportAs: 'itModal',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent extends AbstractComponent {

  /**
   * The modal Title
   */
  @Input() title!: string;

  /**
   * The modal size
   */
  @Input() size?: 'modal-sm' | 'modal-lg' | 'modal-xl';

  /**
   * This event fires immediately when the instance method show is called.
   */
  @Output() onShow: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the modal has been made visible to the user (it will wait for CSS transitions to complete).
   */
  @Output() onShown: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is raised immediately when the instance method hide has been called.
   */
  @Output() onHide: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires when the modal has finished hiding from the user (it will wait for CSS transitions to complete).
   */
  @Output() onHidden: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is fired when the modal is displayed, its background is static and a click outside the modal or a press
   * of the esc key occurs and data-bs-keyboard is set to false.
   */
  @Output() onHidePrevented: EventEmitter<Event> = new EventEmitter();


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
