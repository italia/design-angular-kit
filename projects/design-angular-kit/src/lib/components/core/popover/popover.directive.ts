import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ElementPlacement } from '../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { Popover } from 'bootstrap-italia';

@Directive({
  standalone: true,
  selector: '[itPopover]',
  exportAs: 'itPopover'
})
export class ItPopoverDirective implements AfterViewInit, OnDestroy {

  /**
   * Define the popover content
   * @param content the popover content
   */
  @Input('itPopover') set content(content: string) {
    this.element.setAttribute('data-bs-content', content);
  }

  /**
   * Define the popover title
   * @param title the popover title
   */
  @Input() set popoverTitle(title: string | undefined) {
    if (title) {
      this.element.setAttribute('title', title);
      this.element.setAttribute('data-bs-original-title', title);
    }
  }


  /**
   * Define the popover placement
   * @param placement
   */
  @Input() set popoverPlacement(placement: ElementPlacement) {
    this.element.setAttribute('data-bs-placement', placement);
  }

  /**
   * Appends the popover to a specific element.
   * @param container
   */
  @Input() set popoverContainer(container: 'body' | string | undefined) {
    if (container) {
      this.element.setAttribute('data-container', container);
    }
  }

  /**
   * Indicates whether the title contains html
   * @param html true if contain html
   */
  @Input() set popoverHtml(html: BooleanInput) {
    this.element.setAttribute('data-bs-html', isTrueBooleanInput(html) ? 'true' : 'false');
  }

  /**
   * How popover is triggered
   * - 'hover': To open the Popover on hover of the mouse over the element
   * - 'focus': To ignore popovers on the user's next click of an element other than the toggle element.
   * @param trigger
   */
  @Input() set popoverTrigger(trigger: 'click' | 'hover' | 'focus' | 'manual' | undefined) {
    if (trigger) {
      this.element.setAttribute('data-bs-trigger', trigger);
    }
  }

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

  /**
   * This event fires after the show event when the tooltip template has been added to the DOM.
   */
  @Output() insertedEvent: EventEmitter<Event> = new EventEmitter();

  private readonly element: HTMLElement;
  private popover?: Popover;

  constructor(
    private readonly _elementRef: ElementRef
  ) {
    this.element = this._elementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    this.element.setAttribute('data-bs-toggle', 'popover');
    this.popover = Popover.getOrCreateInstance(this.element);

    this.element.addEventListener('show.bs.popover', event => this.showEvent.emit(event));
    this.element.addEventListener('shown.bs.popover', event => this.shownEvent.emit(event));
    this.element.addEventListener('hide.bs.popover', event => this.hideEvent.emit(event));
    this.element.addEventListener('hidden.bs.popover', event => this.hiddenEvent.emit(event));
    this.element.addEventListener('inserted.bs.popover', event => this.insertedEvent.emit(event));
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  /**
   * Shows the popover of an item.
   */
  public show(): void {
    this.popover?.show();
  }

  /**
   * Hide the popover of an element.
   */
  public hide(): void {
    this.popover?.hide();
  }

  /**
   * Activate / Deactivate the popover of an element
   */
  public toggle(): void {
    this.popover?.toggle();
  }

  /**
   * Hides and destroys the popover of an element.
   */
  public dispose(): void {
    this.popover?.dispose();
  }

  /**
   * Gives the popover of an element a chance to be shown.
   */
  public enable(): void {
    this.popover?.enable();
  }

  /**
   * Removes the ability to show the popover of an element.
   */
  public disable(): void {
    this.popover?.disable();
  }

  /**
   * Toggles the possibility that the popover of an element is shown or hidden.
   */
  public toggleEnabled(): void {
    this.popover?.disable();
  }

  /**
   * Updates the position of an element's popover.
   */
  public update(): void {
    this.popover?.disable();
  }

}
