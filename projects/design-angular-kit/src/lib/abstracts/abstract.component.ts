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
  SimpleChanges,
} from '@angular/core';

@Component({ template: '' })
export abstract class ItAbstractComponent implements AfterViewInit, OnChanges {
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

    const name = this._elementRef.nativeElement.tagName.toLowerCase().replace('it-', '');
    window['BOOTSTRAP_USED_COMPONENTS'] = window['BOOTSTRAP_USED_COMPONENTS'] ? window['BOOTSTRAP_USED_COMPONENTS'] : [];
    window['BOOTSTRAP_USED_COMPONENTS'].indexOf(name) === -1 ? window['BOOTSTRAP_USED_COMPONENTS'].push(name) : '';
  }

  ngAfterViewInit(): void {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'id');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    return `${kebabName}-${ItAbstractComponent.instances++}`;
  }
}
