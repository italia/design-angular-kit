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
import { AbstractComponent } from '../../../abstracts/abstract.component';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { Collapse } from 'bootstrap-italia';

@Component({
  selector: 'it-collapse',
  templateUrl: './collapse.component.html',
  exportAs: 'itCollapse',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapseComponent extends AbstractComponent implements AfterViewInit {

  /**
   * Enable multiple collapse
   */
  @Input() multi?: BooleanInput;

  /**
   * Toggles the collapsible element on invocation
   */
  @Input() opened?: BooleanInput;

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

  @ViewChild('collapse') private collapseDiv?: ElementRef<HTMLDivElement>;

  get isMulti(): boolean {
    return isTrueBooleanInput(this.multi);
  }

  get isOpenedOnStart(): boolean {
    return isTrueBooleanInput(this.opened);
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');

    if (this.collapseDiv) {
      const element = this.collapseDiv.nativeElement;
      this.collapse = Collapse.getOrCreateInstance(element, {
        toggle: this.isOpenedOnStart
      });

      element.addEventListener('show.bs.collapse', event => this.showEvent.emit(event));
      element.addEventListener('shown.bs.collapse', event => this.shownEvent.emit(event));
      element.addEventListener('hide.bs.collapse', event => this.hideEvent.emit(event));
      element.addEventListener('hidden.bs.collapse', event => this.hiddenEvent.emit(event));
    }
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
