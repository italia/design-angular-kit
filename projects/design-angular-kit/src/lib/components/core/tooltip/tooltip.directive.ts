import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output, inject } from '@angular/core';
import { ElementPlacement } from '../../../interfaces/core';
import { Tooltip } from 'bootstrap-italia';
import { inputToBoolean } from '../../../utils/coercion';

@Directive({
  standalone: true,
  selector: '[itTooltip]',
  exportAs: 'itTooltip',
})
export class ItTooltipDirective implements AfterViewInit, OnDestroy {
  private readonly _elementRef = inject(ElementRef);

  /**
   * Define the tooltip title
   * @param title the tooltip title
   */
  @Input('itTooltip') set title(title: string | undefined) {
    if (title) {
      // this.element.setAttribute("title", title);
      this.element.setAttribute('data-bs-original-title', title);
    }
  }

  /**
   * Define the tooltip placement
   * @param placement
   */
  @Input() set tooltipPlacement(placement: ElementPlacement) {
    this.element.setAttribute('data-bs-placement', placement);
  }

  /**
   * Indicates whether the title contains html
   * @param html true if contain html
   */
  @Input({ transform: inputToBoolean }) set tooltipHtml(html: boolean) {
    this.element.setAttribute('data-bs-html', html ? 'true' : 'false');
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
  private tooltip?: Tooltip;

  constructor() {
    this.element = this._elementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    this.element.setAttribute('data-bs-toggle', 'tooltip');
    this.tooltip = Tooltip.getOrCreateInstance(this.element);

    this.element.addEventListener('show.bs.tooltip', event => this.showEvent.emit(event));
    this.element.addEventListener('shown.bs.tooltip', event => this.shownEvent.emit(event));
    this.element.addEventListener('hide.bs.tooltip', event => this.hideEvent.emit(event));
    this.element.addEventListener('hidden.bs.tooltip', event => this.hiddenEvent.emit(event));
    this.element.addEventListener('inserted.bs.tooltip', event => this.insertedEvent.emit(event));
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  /**
   * Shows the tooltip of an item.
   */
  public show(): void {
    this.tooltip?.show();
  }

  /**
   * Hide the tooltip of an element.
   */
  public hide(): void {
    this.tooltip?.hide();
  }

  /**
   * Activate / Deactivate the tooltip of an element
   */
  public toggle(): void {
    this.tooltip?.toggle();
  }

  /**
   * Hides and destroys the tooltip of an element.
   */
  public dispose(): void {
    this.tooltip?.dispose();
  }

  /**
   * Gives the tooltip of an element a chance to be shown.
   */
  public enable(): void {
    this.tooltip?.enable();
  }

  /**
   * Removes the ability to show the tooltip of an element.
   */
  public disable(): void {
    this.tooltip?.disable();
  }

  /**
   * Toggles the possibility that the tooltip of an element is shown or hidden.
   */
  public toggleEnabled(): void {
    this.tooltip?.disable();
  }

  /**
   * Updates the position of an element's tooltip.
   */
  public update(): void {
    this.tooltip?.disable();
  }
}
