import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ElementPlacement } from '../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

import { Tooltip } from 'bootstrap-italia';

@Directive({
  selector: '[itTooltip]',
  exportAs: 'itTooltip'
})
export class TooltipDirective implements AfterViewInit {

  /**
   * Define the tooltip title
   * @param title the tooltip title
   */
  @Input('itTooltip') set title(title: string|undefined) {
    if (title) {
      // this.element.setAttribute("title", title);
      this.element.setAttribute('data-bs-original-title', title);
    }
  }

  /**
   * Define the tooltip placement
   * @param placement
   */
  @Input('tooltipPlacement') set placement(placement: ElementPlacement) {
    this.element.setAttribute('data-bs-placement', placement);
  }

  /**
   * Indicates whether the title contains html
   * @param html true if contain html
   */
  @Input('tooltipHtml') set html(html: BooleanInput) {
    this.element.setAttribute('data-bs-html', isTrueBooleanInput(html) ? 'true' : 'false');
  }

  /**
   * This event fires immediately when the show method is called.
   */
  @Output() onShow: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is triggered when the tooltip has been made visible to the user (it will wait for the CSS transitions to complete).
   */
  @Output() onShown: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires immediately when the hide method is called.
   */
  @Output() onHide: EventEmitter<Event> = new EventEmitter();

  /**
   * This event is raised when the tooltip has finished being hidden from the user (it will wait for the CSS transitions to complete).
   */
  @Output() onHidden: EventEmitter<Event> = new EventEmitter();

  /**
   * This event fires after the show event when the tooltip template has been added to the DOM.
   */
  @Output() onInserted: EventEmitter<Event> = new EventEmitter();

  private readonly element: HTMLElement;
  private tooltip?: any;

  constructor(
    private readonly _elementRef: ElementRef
  ) {
    this.element = this._elementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    this.element.setAttribute('data-bs-toggle', 'tooltip');
    this.tooltip = Tooltip.getOrCreateInstance(this.element);

    this.element.addEventListener('show.bs.tooltip', event => this.onShow.emit(event));
    this.element.addEventListener('shown.bs.tooltip', event => this.onShown.emit(event));
    this.element.addEventListener('hide.bs.tooltip', event => this.onHide.emit(event));
    this.element.addEventListener('hidden.bs.tooltip', event => this.onHidden.emit(event));
    this.element.addEventListener('inserted.bs.tooltip', event => this.onInserted.emit(event));
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
