import {
  Component, Input, ChangeDetectionStrategy, forwardRef,
  AfterContentInit, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef, ContentChildren, QueryList, AfterContentChecked, OnInit, HostListener
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
 * Elemento disponibile per l'autocompletamento del it-form-input
 */
export interface AutoCompleteItem {
  /** Valore voce di autocompletamento */
  value: string;
  /** Opzionale. Path in cui ricercare l'immagine dell'avatar da posizionare a sinistra della voce di autocompletamento */
  avatarSrcPath?: string;
  /** Opzionale. Testo in alternativa dell'avatar per accessibilità */
  avatarAltText?: string;
  /** Opzionale. Icona posizionata a sinistra della voce di autocompletamento */
  icon?: string;
  /** Opzionale. Label posizionata a destra della voce di autocompletamento */
  label?: string;
  /** Opzionale. Link relativo all'elemento */
  link?: string
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
export class FormInputComponent implements OnInit, AfterContentInit, ControlValueAccessor {

  @ContentChildren(ItPrefixDirective, {descendants: true}) _prefixChildren: QueryList<ItPrefixDirective>;
  @ContentChildren(ItTextPrefixDirective, {descendants: true}) _textPrefixChildren: QueryList<ItTextPrefixDirective>;

  @ContentChildren(ItSuffixDirective, {descendants: true}) _suffixChildren: QueryList<ItSuffixDirective>;
  @ContentChildren(ItTextSuffixDirective, {descendants: true}) _textSuffixChildren: QueryList<ItTextSuffixDirective>;


  @ViewChild('inputElement', { static: false })
  private _inputElement: ElementRef;

  /**
   * Opzionale. Indica se mostrare gli input readonly nella forma stilizzata come testo normale
   */
  @Input()
  get readonlyPlainText(): boolean { return this._readonlyPlainText; }
  set readonlyPlainText(value: boolean) { this._readonlyPlainText = Util.coerceBooleanProperty(value); }
  private _readonlyPlainText: boolean = false;


  /**
   * Opzionale. Indica se abilitare il controllo sulla sicurezza della password
   */
  @Input()
  get enablePasswordStrengthMeter(): boolean { return this._enablePasswordStrengthMeter; }
  set enablePasswordStrengthMeter(value: boolean) { this._enablePasswordStrengthMeter = Util.coerceBooleanProperty(value); }
  private _enablePasswordStrengthMeter: boolean = false;

  /**
   * Punteggio di sicurezza calcolato in base alla password immessa se enablePasswordStrengthMeter ha valore true
   */
  passwordStrength: number = 0;

  /**
   * Dimensione dell'input di autocomplete. Di default ha dimensione standard.
   */
  @Input() autocompleteWrapperSize: 'big' | 'default' = 'default';

  private _passwordStrengthMeterConfig: PasswordStrengthMeterConfig = {
    shortPass: 'Password molto debole',
    badPass: 'Password debole',
    goodPass: 'Password sicura',
    strongPass: 'Password molto sicura',
    enterPass: 'Inserisci almeno 8 caratteri e una lettera maiuscola',
    alertCaps: 'CAPS LOCK inserito',
    showText: true,
    minimumLength: 8,
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
    this.showAutocompletion = false;
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
   * Indica se la label dell'input deve essere visualizzata dall'utente o solamente visibile per lo screen reader
   */
  @Input()
   get labelVisuallyHidden(): boolean { return this._labelVisuallyHidden; }
   set labelVisuallyHidden(value: boolean) { this._labelVisuallyHidden = value; }
   private _labelVisuallyHidden: boolean = false;

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
  get autoCompleteData(): Array<AutoCompleteItem> { return this._autoCompleteData; }
  set autoCompleteData(value: Array<AutoCompleteItem>) { this._autoCompleteData = value; }
  private _autoCompleteData: Array<AutoCompleteItem>;

  /**
   * Evento emesso quando il valore dell'input cambia.
   * Gli eventi di change sono emessi soltanto quando il valore cambia a causa dell'interazione dell'utente
   * con il campo d'input.
   */
  @Output()
  readonly change: EventEmitter<FormInputChange> = new EventEmitter<FormInputChange>();

  /**
   * Indica se è attivo il CAPS LOCK
   */
  isCapsLockActive = false;

  /**
   * La label da mostrare in caso sia attivo il CAPS LOCK
   */
  @Input() capsLockActiveLabel = 'CAPS LOCK inserito';

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

  private showAutocompletion = false;
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
    if(this.isPasswordMode && this._enablePasswordStrengthMeter) {
      this.recalculatePasswordStrength();
    }

    this.showAutocompletion = this._type === INPUT_TYPES.SEARCH && this.isAutocompletable() && this.value;
   
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
    if (this.value) {
      const lowercaseValue = this.value.toLowerCase();
      const lowercaseData = this._autoCompleteData.map(item => {
        return { ...item, original : item.value, lowercase : item.value.toLowerCase() };
      });

      const relatedEntries = [];
      lowercaseData.forEach(lowercaseEntry => {
        const matching = (lowercaseEntry.lowercase).includes(lowercaseValue);
        if (matching) {
          relatedEntries.push(lowercaseEntry);
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

  onEntryClick(entry: AutoCompleteItem, event: Event) {
    // Se non è stato definito un link associato all'elemento dell'autocomplete, probabilmente il desiderata 
    // non è effettuare la navigazione al default '#', pertanto in tal caso meglio annullare la navigazione.
    if(!entry.link) {
      event.preventDefault();
    }
    this.value = entry.value;
    this.showAutocompletion = false;
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


  /**
   * Ricalcola il punteggio di sicurezza in base al valore corrente
   */
  recalculatePasswordStrength(): void {
    if(this.value && typeof this.value === 'string') {
      // Si crea una nuova stringa rimuovendo le lettere duplicate dalla password immessa
      const pswWithoutDuplicates = Array.from(new Set(this.value.split(''))).join('');
      
      let newPasswordStrength = 0;
    
      // si controlla se sono presenti LETTERE MINUSCOLE
      const hasLowerLetters = /[a-z]+/.test(pswWithoutDuplicates);
      // si controlla se sono presenti LETTERE MAIUSCOLE
      const hasUpperLetters = /[A-Z]+/.test(pswWithoutDuplicates);
      // si controlla se sono presenti NUMERI
      const hasNumbers = /[0-9]+/.test(pswWithoutDuplicates);
      // si controlla se sono presenti CARATTERI SPECIALI
      const symbolsRegex = /[$-/:-?{-~!"^_@`\[\]]/g;
      const hasSymbols = symbolsRegex.test(pswWithoutDuplicates);

      // si controlla se la LUNGHEZZA della password supera la minima stabilita
      const isGreaterThanMinLength = this.passwordStrengthMeterConfig.minimumLength <= pswWithoutDuplicates.length;

      const pswChecks = [hasLowerLetters, hasUpperLetters, hasNumbers, hasSymbols, isGreaterThanMinLength];
      let passedMatches = 0;
      for (const flag of pswChecks) {
        passedMatches += flag === true ? 1 : 0;
      }
      // per ogni controllo superato, si aggiunge 12 punti al punteggio
      newPasswordStrength += passedMatches * 12;

      // si considera anche la variazione tra tutti i caratteri della password
      newPasswordStrength += 2 * pswWithoutDuplicates.length;

      // ed infine anche la lunghezza della password effettiva, contando anche le lettere duplicate, fino ad un massimo di 12 punti
      newPasswordStrength += Math.min(12, this.value.length - pswWithoutDuplicates.length);

      // Il punteggio della password non può in ogni caso superare il valore 100  
      this.passwordStrength = Math.min(newPasswordStrength, 100);
    }
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


 

  @HostListener('window:click', ['$event'])
  @HostListener('window:keydown', ['$event'])
  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    this.isCapsLockActive = event.getModifierState && event.getModifierState('CapsLock');
  }


  autocompleteItemTrackByValueFn(index: number, item: AutoCompleteItem) {
    return item.value;
  }
}

