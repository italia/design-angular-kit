import {
  Component, Input, ChangeDetectionStrategy, forwardRef,
  AfterContentInit, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef, ContentChildren, QueryList, AfterContentChecked, OnInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { merge } from 'rxjs';
import { InputType, INPUT_TYPES } from '../models/InputType';
import { Util } from '../util/util';
import { ItPrefixDirective } from './it-prefix.directive';
import { ItSuffixDirective } from './it-suffix.directive';
import { ItTextPrefixDirective } from './it-text-prefix.directive';
import { ItTextSuffixDirective } from './it-text-suffix.directive';

let identifier = 0;

export class FormInputChange {
  constructor(
    public source: FormInputComponent,
    public value: any
  ) { }
}

export interface PasswordStrengthMeterConfig {
  /** Testo per il punteggio di forza della password minimo */
  shortPass: string,
  /** Testo per punteggio di forza della password basso	 */
  badPass: string,
  /** Testo per punteggio di forza della password buono	 */
  goodPass: string,
  /** Testo per il punteggio di forza della password massimo	 */
  strongPass: string,
  /** Testo di aiuto */
  enterPass: string,
  /** Testo per avvertire che il CAPS LOCK è inserito	 */
  alertCaps: string,
  /** Lunghezza minima per il calcolo della forza della password (soglia password molto debole)	 */
  showText: true,
  /** Attiva/disattiva la visibilità dei messaggi di errore	 */
  minimumLength: number,
}

export type PasswordStrengthLevel = 0 | 1 | 2 | 3 | 4;


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
export class FormInputComponent implements OnInit, AfterContentInit, ControlValueAccessor {

  @ContentChildren(ItPrefixDirective, {descendants: true}) _prefixChildren: QueryList<ItPrefixDirective>;
  @ContentChildren(ItTextPrefixDirective, {descendants: true}) _textPrefixChildren: QueryList<ItTextPrefixDirective>;

  @ContentChildren(ItSuffixDirective, {descendants: true}) _suffixChildren: QueryList<ItSuffixDirective>;
  @ContentChildren(ItTextSuffixDirective, {descendants: true}) _textSuffixChildren: QueryList<ItTextSuffixDirective>;


  @ViewChild('inputElement', { static: false })
  private _inputElement: ElementRef;

 
  /**
   * Indica se abilitare il controllo sulla sicurezza della password
   */
  @Input()
  get enablePasswordStrengthMeter(): boolean { return this._enablePasswordStrengthMeter; }
  set enablePasswordStrengthMeter(value: boolean) { this._enablePasswordStrengthMeter = Util.coerceBooleanProperty(value); }
  private _enablePasswordStrengthMeter: boolean = false;


  private _passwordStrengthMeterConfig: PasswordStrengthMeterConfig = {
    shortPass: 'Password molto debole',
    badPass: 'Password debole',
    goodPass: 'Password sicura',
    strongPass: 'Password molto sicura',
    enterPass: 'Inserisci almeno 8 caratteri e una lettera maiuscola',
    alertCaps: 'CAPS LOCK inserito',
    showText: true,
    minimumLength: 4,
  };

  @Input() set passwordStrengthMeterConfig(newConfig: PasswordStrengthMeterConfig) {
    this._passwordStrengthMeterConfig = {...this._passwordStrengthMeterConfig, ...newConfig};
  }

  get passwordStrengthMeterConfig(): PasswordStrengthMeterConfig {
    return this._passwordStrengthMeterConfig;
  }

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

  get value(): any { return this._inputElement?.nativeElement?.value; }
  set value(value: any) { 
    if(this._inputElement) {
      this._inputElement.nativeElement.value = value;
    } 
  }

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
    const newValue = Util.coerceBooleanProperty(value);
   
    // In alcuni casi la label deve essere sempre posizionata sopra l'input per evitare sovrapposizioni 
    // di testo, come in caso di presenza del placeholder o per l'input di tipo "time"
    if(newValue || (!this.value && !this.placeholder && this.type !== INPUT_TYPES.TIME)) {
      this._isLabelActive = newValue;
    } else {
      this._isLabelActive = true;
    }
  }
  private _isLabelActive: boolean;


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

  /** Indica se è stato effettuato il focus sul campo di input */
  focus: boolean = false;

  private _emitChangeEvent(): void {
    if (this._isInitialized) {
      this.change.emit(new FormInputChange(this, this.value));
    }
  }

  ngOnInit(): void {
    this.isLabelActive = false;
  }


  writeValue(value: any): void {
    this.value = value;
    if (this.value) {
      this.isLabelActive = true;
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

    // Run change detection if the suffix or prefix changes.
    merge(this._prefixChildren.changes, this._suffixChildren.changes,
          this._textPrefixChildren.changes, this._textSuffixChildren.changes
    ).subscribe(() => {
      this._changeDetector.markForCheck();
    });
    
  }

  onChange() {
    this._emitChangeEvent();
    this._controlValueAccessorChangeFn(this.value);
  }

  onInput() {
    if(this._type === INPUT_TYPES.PASSWORD) {
      this.checkPasswordStrength();
    }
    if (this._type === INPUT_TYPES.SEARCH && this.isAutocompletable() && !this._showAutocompletion) {
      this._showAutocompletion = true;
    }

    this._emitChangeEvent();
    this._controlValueAccessorChangeFn(this.value);
  }

  onFocus() {
    this.focus = true;
    this.isLabelActive = true;
  }

  onBlur() {
    this.focus = false;
    const inputValue: string = this.value;
    if (!inputValue || inputValue.length === 0) {
     
      this.isLabelActive = false;
      
      if (this.type === INPUT_TYPES.NUMBER) {
        this.value = '';
      }
    }
  }

  get noteId() {
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

  /**
   * indica se il campo di input è composto da altri elementi accessori come 
   * icone o bottoni da posizionare adiacenti al campo di input
   */
  get isInputGroup(): boolean {
    return  this._textPrefixChildren.length > 0 || this._prefixChildren.length > 0 || !!this.icon 
            || this._suffixChildren.length > 0 || this._textSuffixChildren.length > 0;
  }


  passwordStrength = 0;
  checkPasswordStrength() {
    const p = this.value;
    // 1
    let force = 0;
  
    // 2
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);
  
    // 3
    const flags = [lowerLetters, upperLetters, numbers, symbols];
  
    // 4
    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }
  
    // 5
    force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
    force += passedMatches * 10;
  
    // 6
    force = (p.length <= 6) ? Math.min(force, 10) : force;

    this.passwordStrength = Math.min(force, 100);
  }

  get passwordStrengthLevel(): PasswordStrengthLevel {
    return this.passwordStrength === 0 ? 0 : this.passwordStrength < 25 ? 1 : this.passwordStrength < 50 ? 2 : this.passwordStrength < 75 ? 3 : 4;
  }

  get passwordStrengthStatusMessage(): string {
    switch(this.passwordStrengthLevel) {
      case 0: return this._passwordStrengthMeterConfig.enterPass;
      case 1: return this._passwordStrengthMeterConfig.shortPass;
      case 2: return this._passwordStrengthMeterConfig.badPass;
      case 3: return this._passwordStrengthMeterConfig.goodPass;
      case 4: return this._passwordStrengthMeterConfig.strongPass;
    }
  }
}

