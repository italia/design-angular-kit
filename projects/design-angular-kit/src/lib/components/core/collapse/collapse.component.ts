import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { Collapse } from 'bootstrap-italia';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-collapse',
  templateUrl: './collapse.component.html',
  exportAs: 'itCollapse',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItCollapseComponent extends ItAbstractComponent implements AfterViewInit {
  /**
   * Enable multiple collapse
   * @default false
   */
  @Input({ transform: inputToBoolean }) multi?: boolean;

  /**
   * Toggles the collapsible element on invocation
   * @default false
   */
  @Input({ transform: inputToBoolean }) opened?: boolean;

  /**
   * Custom class
   */
  @Input() class: string = '';

  /**
   * This event fires immediately when the show method is called.
   */
  @Output() showEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).
   */
  @Output() shownEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires immediately when the hide method is called.
   */
  @Output() hideEvent: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).
   */
  @Output() hiddenEvent: EventEmitter<Event> = new EventEmitter();

  private collapse?: Collapse;

  private open: boolean = false;

  @ViewChild('collapse') protected collapseDiv?: ElementRef<HTMLDivElement>;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');

    if (this.collapseDiv) {
      const element = this.collapseDiv.nativeElement;
      this.collapse = Collapse.getOrCreateInstance(element, {
        toggle: this.opened,
      });

      element.addEventListener('show.bs.collapse', event => {
        this.open = true;
        this.showEvent.emit(event);
      });
      element.addEventListener('shown.bs.collapse', event => {
        this.open = true;
        this.shownEvent.emit(event);
      });
      element.addEventListener('hide.bs.collapse', event => {
        this.open = false;
        this.hideEvent.emit(event);
      });
      element.addEventListener('hidden.bs.collapse', event => {
        this.open = false;
        this.hiddenEvent.emit(event);
      });
    }
  }

  /**
   * Shows if collapse is open or not
   */
  public isOpen(): boolean {
    return this.open;
  }

  /**
   * Shows a resealable item
   * NOTE: Returns to the caller before the collapsable element has actually been shown (onShown event).
   */
  public show(): void {
    this.collapse?.show();
  }

  /**
   * Hides a resealable item
   * NOTE: Returns to the caller before the collapsable element has actually been hidden (onHidden Event)
   */
  public hide(): void {
    this.collapse?.hide();
  }

  /**
   * Toggle a collapsible item to show or hide it.
   * NOTE: Returns to the caller before the collapsable element has actually been shown or hidden (onShown and onHidden events)
   */
  public toggle(): void {
    this.collapse?.toggle();
  }

  /**
   * Eliminates the possibility of an item being resealable
   */
  public dispose(): void {
    this.collapse?.dispose();
  }
}
