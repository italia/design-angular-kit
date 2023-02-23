import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';

@Component({ template: '' })
export class AbstractComponent implements AfterViewInit, OnChanges {

  /**
   * The element ID
   */
  @Input() id?: string;

  /**
   * Fired when component input attributes was changed
   */
  @Output() public valueChanges: EventEmitter<void>;

  constructor(
    protected readonly _renderer: Renderer2,
    protected readonly _elementRef: ElementRef,
    protected readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    this.valueChanges = new EventEmitter<void>();
  }

  ngAfterViewInit(): void {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'id');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.valueChanges.next(); // The inputs were changed
  }
}
