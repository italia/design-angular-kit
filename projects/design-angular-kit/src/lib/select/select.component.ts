import {
  Component, Input, ChangeDetectionStrategy, forwardRef,
  AfterContentInit, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef, ContentChildren, QueryList, AfterContentChecked, OnInit, HostListener, AfterViewInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Util } from '../util/util';

let identifier = 0;

export class SelectChange {
  constructor(
    public source: SelectComponent,
    public value: any
  ) { }
}

/**
 * Elementi e stili per la creazione di select accessibili e responsive.
 */
@Component({
  selector: 'it-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent implements OnInit, AfterContentInit, AfterViewInit, ControlValueAccessor {

  @ViewChild('selectElement', { static: false })
  private _selectElement: ElementRef;


  /**
   * Indica l'id dell'elemento HTML
   */
  @Input()
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  private _id = `select-${identifier++}`;

  /**
   * Indica l'attributo name del componente HTML
   */
  @Input()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  private _name: string;

  /**
   * Indica il valore della label da visualizzare
   */
  @Input()
  get label(): string { return this._label; }
  set label(value: string) { this._label = value; }
  private _label: string;

  /**
   * Indica se la label della select deve essere visualizzata dall'utente o solamente visibile per lo screen reader
   * @default false
   */
  @Input()
  get labelVisuallyHidden(): boolean { return this._labelVisuallyHidden; }
  set labelVisuallyHidden(value: boolean) { this._labelVisuallyHidden = Util.coerceBooleanProperty(value); }
  private _labelVisuallyHidden: boolean = false;



  /**
   * Indica il testo di aiuto sotto la select
   */
  @Input()
  get note(): string { return this._note; }
  set note(value: string) { this._note = value; }
  private _note: string;

  /**
   * (Opzionale) Classe CSS che verrà applicata all'elemento `select`
   */
  @Input()
  get customSelectClass(): string { return this._customSelectClass; }
  set customSelectClass(value: string) { this._customSelectClass = value; }
  private _customSelectClass: string;
   

  /**
   * (Opzionale) Indica la grandezza della select.
   * @default 'default'
   */
  @Input()
  get size(): 'lg' | 'sm' | 'default' { return this._size; }
  set size(value: 'lg' | 'sm' | 'default') { this._size = value; }
  private _size: 'lg' | 'sm' | 'default' = 'default';



  /**
   * Opzionale.
   * Indica se il campo in questione è disabilitato.
   * Accetta una espressione booleana o può essere usato come attributo senza valore
   */
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) { this._disabled = Util.coerceBooleanProperty(value); }
  private _disabled = false;

  /**
   * Opzionale.
   * Indica se il campo in questione è di sola lettura.
   * Accetta una espressione booleana o può essere usato come attributo senza valore
   */
  @Input()
  get readonly(): boolean { return this._readonly; }
  set readonly(value: boolean) { this._readonly = Util.coerceBooleanProperty(value); }
  private _readonly = false;

  get value(): any { return this._selectElement?.nativeElement?.value; }
  set value(value: any) { 
    if(this._selectElement) {
      this._selectElement.nativeElement.value = value;
    } 
  }


  /**
   * Evento emesso quando il valore della select cambia.
   * Gli eventi di change sono emessi soltanto quando il valore cambia a causa dell'interazione dell'utente
   * con il campo select.
   */
  @Output()
  readonly change: EventEmitter<SelectChange> = new EventEmitter<SelectChange>();


  private _isInitialized = false;
  /** Valore con cui viene inizializzata la select. */
  private _initialValue: any;

  private _controlValueAccessorChangeFn: (value: any) => void = () => { };
  private _onTouched: () => any = () => { };

  /** Indica se è stato effettuato il focus sul campo di input */
  focus: boolean = false;

  private _emitChangeEvent(): void {
    if (this._isInitialized) {
      this.change.emit(new SelectChange(this, this.value));
    }
  }

  ngOnInit(): void { }


  writeValue(value: any): void {
    this.value = value;
    
    this.onChange();
    if (this._isInitialized) {
      this._changeDetector.detectChanges();
    } else {
      // L'elmento HTML select non è ancora disponibile e quindi la view non riuscirebbe ad effettuare il primo aggiornamento correttamente.
      // Pertanto si memorizza il valore iniziale che dovrà avere e si assegna quando è disponibile nel DOM (ngAfterViewInit)
      this._initialValue = value;
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this._controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  constructor(private _changeDetector: ChangeDetectorRef) { }


  ngAfterContentInit(): void {
    this._isInitialized = true;

  }

  ngAfterViewInit(): void {
    this._isInitialized = true;

    if(this._selectElement && this._initialValue) {
      this._selectElement.nativeElement.value = this._initialValue;
    }
  }

  onChange() {
    this._emitChangeEvent();
    this._controlValueAccessorChangeFn(this.value);
  }

  onFocus() {
    this.focus = true;
  }

  onBlur() {
    this.focus = false;
  }

  get noteId() {
    return `${this.id}-select-note`;
  }

  get selectClassBySize() {
    return this.size !== 'default' ? 'form-select-' + this.size : '';
  }

}

