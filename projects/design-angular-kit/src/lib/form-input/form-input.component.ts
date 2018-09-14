import {
  Component, Input, ChangeDetectionStrategy, forwardRef,
  AfterContentInit, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { InputType, INPUT_TYPES } from '../models/InputType';
import { Util } from '../util/util';

let identifier = 0;

export class FormInputChange {
  constructor(
    public source: FormInputComponent,
    public value: any
  ) { }
}

/**
 * Elementi e stili per la creazione di input accessibili e responsivi.
 */
@Component({
  selector: 'it-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormInputComponent),
    multi: true
  }]
})
export class FormInputComponent implements AfterContentInit, ControlValueAccessor {
  @ViewChild('inputElement')
  private _inputElement: ElementRef;

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
  private _id = `form-input-${identifier++}`;

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
   * Indica il tipo di campo. Puo' assumere i valori text, email, password e number
   */
  @Input()
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    if (InputType.is(value)) {
      if (value === INPUT_TYPES.NUMBER) {
        if (isNaN(Number(this.value))) {
          this.value = '';
          this.onChange();
        }
      }
      this._type = value;
    } else {
      this._type = INPUT_TYPES.TEXT;
    }

    this._isPasswordMode = this._type === INPUT_TYPES.PASSWORD;
    this._isPasswordVisible = false;
    this._showAutocompletion = false;
  }
  private _type = INPUT_TYPES.TEXT;

  /**
   * Indica il valore della label da visualizzare
   */
  @Input()
  get label(): string { return this._label; }
  set label(value: string) { this._label = value; }
  private _label: string;

  /**
   * Indica il testo di aiuto sotto la input
   */
  @Input()
  get note(): string { return this._note; }
  set note(value: string) { this._note = value; }
  private _note: string;

  /**
   * Indica il testo presente nel campo vuoto. Nel caso sia già presente la label, il placeholder non verrà mostrato
   */
  @Input()
  get placeholder(): string {
    if (this.label) {
      if (this.label.length > 0) {
        return '';
      }
    }
    return this._placeholder || '';
  }
  set placeholder(value: string) { this._placeholder = value; }
  private _placeholder: string;

  /**
   * Indica l'icona da visualizzare a sinistra del campo di input
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

  get value(): any { return this._inputElement.nativeElement.value; }
  set value(value: any) { this._inputElement.nativeElement.value = value; }

  /**
   * Opzionale.
   * Disponibile solo se il type è search.
   * Indica la lista di elementi ricercabili su cui basare il sistema di autocompletamento della input
   */
  @Input()
  get autoCompleteData(): Array<string> { return this._autoCompleteData; }
  set autoCompleteData(value: Array<string>) { this._autoCompleteData = value; }
  private _autoCompleteData: Array<string>;

  /**
   * Evento emesso quando il valore dell'input cambia.
   * Gli eventi di change sono emessi soltanto quando il valore cambia a causa dell'interazione dell'utente
   * con il campo d'input.
   */
  @Output()
  readonly change: EventEmitter<FormInputChange> = new EventEmitter<FormInputChange>();

  get isLabelActive() {
    return this._isLabelActive;
  }
  set isLabelActive(value: boolean) {
    this._isLabelActive = Util.coerceBooleanProperty(value);
  }
  private _isLabelActive = false;


  get isPasswordMode() {
    return this._isPasswordMode;
  }
  set isPasswordMode(value: boolean) {
    this._isPasswordMode = Util.coerceBooleanProperty(value);
  }
  private _isPasswordMode = false;

  get isPasswordVisible() {
    return this._isPasswordVisible;
  }
  set isPasswordVisible(value: boolean) {
    this._isPasswordVisible = Util.coerceBooleanProperty(value);
    this._type = this._isPasswordVisible ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD;
  }
  private _isPasswordVisible = false;

  private _showAutocompletion = false;
  private _isInitialized = false;
  private _controlValueAccessorChangeFn: (value: any) => void = () => { };
  private _onTouched: () => any = () => { };

  private _emitChangeEvent(): void {
    if (this._isInitialized) {
      this.change.emit(new FormInputChange(this, this.value));
    }
  }

  writeValue(value: any): void {
    this.value = value;
    if (this.value) {
      this._isLabelActive = true;
    }

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

  onInput() {
    if (this._type === INPUT_TYPES.SEARCH && this.isAutocompletable() && !this._showAutocompletion) {
      this._showAutocompletion = true;
    }

    this._emitChangeEvent();
    this._controlValueAccessorChangeFn(this.value);
  }

  onFocus() {
    this._isLabelActive = true;
  }

  onBlur() {
    const inputValue: string = this.value;
    if (inputValue.length === 0) {
      this._isLabelActive = false;
      if (this.type === INPUT_TYPES.NUMBER) {
        this.value = '';
      }
    }
  }

  noteId() {
    return `${this.id}-note`;
  }

  getRelatedEntries() {
    if (this.value && this._showAutocompletion) {
      const lowercaseValue = this.value.toLowerCase();
      const lowercaseData = this._autoCompleteData.map(string => {
        return { original : string, lowercase : string.toLowerCase() };
      });

      const relatedEntries = [];
      lowercaseData.forEach(lowercaseEntry => {
        if ((lowercaseEntry.lowercase).includes(lowercaseValue)) {
          relatedEntries.push(lowercaseEntry.original);
        }
      });

      return relatedEntries;
    } else {
      return [];
    }
  }

  isAutocompletable() {
    if (this._autoCompleteData && this._type === INPUT_TYPES.SEARCH) {
      return this._autoCompleteData.length > 0;
    } else {
      return false;
    }
  }

  onEntryClick(entry) {
    this.value = entry;
    this._showAutocompletion = false;
    this.onChange();
  }

}
