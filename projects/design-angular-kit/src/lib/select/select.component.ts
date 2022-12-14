import {
  Component, Input, ChangeDetectionStrategy, forwardRef,
  AfterContentInit, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef, ContentChildren, QueryList, AfterContentChecked, OnInit, HostListener
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Util } from '../util/util';
import { ItOption } from './option.directive';

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
export class SelectComponent implements OnInit, AfterContentInit, ControlValueAccessor {

  @ViewChild('selectElement', { static: false })
  private _selectElement: ElementRef;


  @ContentChildren(ItOption) options: QueryList<HTMLOptionsCollection>;


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
   * Indica se la label dell'input deve essere visualizzata dall'utente o solamente visibile per lo screen reader
   */
  @Input()
  get labelVisuallyHidden(): boolean { return this._labelVisuallyHidden; }
  set labelVisuallyHidden(value: boolean) { this._labelVisuallyHidden = value; }
  private _labelVisuallyHidden: boolean = false;



  /**
   * Indica il testo di aiuto sotto la select
   */
  @Input()
  get note(): string { return this._note; }
  set note(value: string) { this._note = value; }
  private _note: string;


  /**
   * Indica l'icona da visualizzare a sinistra della select
   */
  @Input()
  get icon(): string { return this._icon; }
  set icon(value: string) { this._icon = value; }
  private _icon: string;

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
  private _controlValueAccessorChangeFn: (value: any) => void = () => { };
  private _onTouched: () => any = () => { };

  /** Indica se è stato effettuato il focus sul campo di input */
  focus: boolean = false;

  private _emitChangeEvent(): void {
    if (this._isInitialized) {
      this.change.emit(new SelectChange(this, this.value));
    }
  }

  ngOnInit(): void {
  }


  writeValue(value: any): void {
    this.value = value;
  
    this.onChange();
    if (this._isInitialized) {
      this._changeDetector.detectChanges();
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

}

