import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { AbstractComponent } from '../../../abstracts/abstract.component';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

import { Collapse } from 'bootstrap-italia';

@Component({
  selector: 'it-collapse[id]',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  exportAs: 'itCollapse'
})
export class CollapseComponent extends AbstractComponent {

  /**
   * Enable multiple collapse
   */
  @Input() multi?: BooleanInput;

  /**
   * Custom class
   */
  @Input() class: string = '';

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

  private readonly element: HTMLElement;
  private collapse?: any;

  @ViewChild('collapse')
  private collapseDiv!: ElementRef<HTMLDivElement>;

  get isMulti(): boolean {
    return isTrueBooleanInput(this.multi);
  }

  constructor(
    protected override readonly _renderer: Renderer2,
    protected override readonly _elementRef: ElementRef,
    protected override readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    super(_renderer, _elementRef, _changeDetectorRef);
    this.element = this._elementRef.nativeElement;
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');
    this.collapse = Collapse.getOrCreateInstance(this.collapseDiv.nativeElement, {
      toggle: false
    });

    this.element.addEventListener('show.bs.collapse', event => this.onShow.emit(event));
    this.element.addEventListener('shown.bs.collapse', event => this.onShown.emit(event));
    this.element.addEventListener('hide.bs.collapse', event => this.onHide.emit(event));
    this.element.addEventListener('hidden.bs.collapse', event => this.onHidden.emit(event));
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
