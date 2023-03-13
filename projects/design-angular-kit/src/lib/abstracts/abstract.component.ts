import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';

@Component({ template: '' })
export abstract class AbstractComponent implements AfterViewInit, OnChanges {

  /**
   * The element ID
   */
  @Input() id: string = this.getDefaultId();

  /**
   * Fired when component input attributes was changed
   */
  @Output() public valueChanges: EventEmitter<void>;

  /**
   * Counter of active instances
   * @private
   */
  private static instances = 0;


  protected readonly _renderer: Renderer2; // Injected
  protected readonly _elementRef: ElementRef; // Injected
  protected readonly _changeDetectorRef: ChangeDetectorRef; // Injected

  constructor() {
    this._renderer = inject(Renderer2);
    this._elementRef = inject(ElementRef);
    this._changeDetectorRef = inject(ChangeDetectorRef);

    this.valueChanges = new EventEmitter<void>();
  }

  ngAfterViewInit(): void {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'id');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.valueChanges.next(); // The inputs were changed
  }

  /**
   * Generate unique id for components
   * @private
   */
  private getDefaultId(): string {
    const name = this.constructor.name.replace('Component', '');
    const kebabName = name.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());
    return `it-${kebabName}-${AbstractComponent.instances++}`;
  }
}
