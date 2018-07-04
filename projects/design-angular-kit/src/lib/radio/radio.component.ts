import { Component, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy, AfterContentInit, Directive, ContentChildren, QueryList, OnInit, AfterViewInit, OnDestroy, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { UniqueSelectionDispatcher } from './unique-selection-dispatcher';


let identifier = 0;

export const IT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupDirective),
  multi: true
};

export class RadioChange {
  constructor(
    public source: RadioButtonComponent,
    public value: any
  ) { }
}

@Directive({
  selector: 'it-radio-group',
  exportAs: 'itRadioGroup',
  providers: [IT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
  host: {
    'role': 'radiogroup'
  }
})
export class RadioGroupDirective implements AfterContentInit, ControlValueAccessor {

  /**
   * Il valore selezionato per il gruppo. Dovrebbe essere uguale al valore del radio button selezionato se
   * *esiste* un radio button con un valore corrispondente. Se *non esiste* un radio button corrispondente
   * questo valore persiste ed è applicato nel caso in cui un nuovo radio button viene aggiunto con il valore
   * corrispondente.
   */
  private _value: any = null;

  /** L'attributo HTML name da applicare ai radio button in questo gruppo */
  private _name: string = `it-radio-group-${identifier++}`;

  /** Il radio button attualmente selezionato. */
  private _selected: RadioButtonComponent | null = null;

  /** se `value` è stato settato al suo valore iniziale. */
  private _isInitialized: boolean = false;

  /** Se il radio group è disabilitato. */
  private _disabled: boolean = false;

  /** Il metodo da chiamare per aggiornare ngModel */
  _controlValueAccessorChangeFn: (value: any) => void = () => { };

  onTouched: () => any = () => { };

  /**
   * Evento emesso quando il valore del gruppo cambia.
   * Gli eventi di change sono emessi soltanto quando il valore cambia a causa dell'interazione dell'utente
   * con il radio button (stesso comportamento di `<input type-"radio">`).
   */
  @Output() readonly change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();

  /** radio buttons figli. */
  @ContentChildren(forwardRef(() => RadioButtonComponent), { descendants: true })
  _radios: QueryList<RadioButtonComponent>;

  /** Nome del gruppo di radio button. Tutti i radio button all'interno del gruppo avranno questo nome. */
  @Input()
  get name(): string { return this._name; }
  set name(value: string) {
    this._name = value;
    this._updateRadioButtonNames();
  }

  /** Valore del radio button. */
  @Input()
  get value(): any { return this._value; }
  set value(newValue: any) {
    if (this._value !== newValue) {
      this._value = newValue;

      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }

  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }

  /** Il radio button selezionato. */
  @Input()
  get selected() { return this._selected; }
  set selected(selected: RadioButtonComponent | null) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }

  /** Se il gruppo è disabled */
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value) {
    this._disabled = !!value;
    this._markRadiosForCheck();
  }

  constructor(
    private _changeDetector: ChangeDetectorRef
  ) { }

  /**
   * Inizializza le proprietà quando il contenuto dei figliè disponibile.
   * Questo permette di propagare gli attributi rilevanti ai radio buttons associati.
   */
  ngAfterContentInit(): void {
    this._isInitialized = true;
  }

  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  private _updateRadioButtonNames(): void {
    if (this._radios) {
      this._radios.forEach(radio => {
        radio.name = this.name;
      });
    }
  }

  /** Aggiorna il radio button `selected` a seconda del suo _value. */
  private _updateSelectedRadioFromValue(): void {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;

    // if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach(radio => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    // }
  }

  /** Invia l'evento change con la selezione corrente e il valore del gruppo. */
  _emitChangeEvent(): void {
    if (this._isInitialized) {
      this.change.emit(new RadioChange(this._selected!, this._value));
    }
  }

  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach(radio => radio._markForCheck());
    }
  }

  writeValue(value: any): void {
    this.value = value;
    this._changeDetector.markForCheck();
  }

  registerOnChange(fn: (value: any) => void): void {
    this._controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}

/**
 * Un radio button con design bootstrap italia. Supporta tutte le funzionalità di una radio HTML5,
 * ed espone una API simile. Una `<it-radio-button>` può essere checked, unchecked, o disabled.
 */
@Component({
  selector: 'it-radio-button',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  exportAs: 'itRadioButton',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent implements OnInit, OnDestroy {

  private id: string = `radio-${identifier++}`;

  /** Attributo 'name' usato per raggruppare i radio button per un'unica selezione. */
  @Input() name: string;

  /** L'etichetta delradio button. */
  @Input()
  label: string;

  /** se il radio button è checked. */
  @Input()
  get checked(): boolean { return this._checked; }
  set checked(value: boolean) {
    const newCheckedState = !!value;
    if (this._checked !== newCheckedState) {
      this._checked = newCheckedState;
      if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }

      if (newCheckedState) {
        this._radioDispatcher.notify(this.id, this.name);
      }

      this._changeDetector.markForCheck();
    }
  }

  /** Il valore di questo radio button. */
  @Input()
  get value(): any { return this._value; }
  set value(value: any) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }

  /** Se il radio button è disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
  }
  set disabled(value: boolean) {
    const newDisabledState = !!value;
    if (this._disabled !== newDisabledState) {
      this._disabled = newDisabledState;
      this._changeDetector.markForCheck();
    }
  }

  /**
   * Evento emesso quando il valore `checked` del radio button cambia.
   */
  @Output() readonly change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();

  /** Il radio group padre. Può essere presente o meno. */
  radioGroup: RadioGroupDirective;

  /** Se il radio button è checked. */
  private _checked: boolean = false;

  /** Se il radio button è disabled. */
  private _disabled: boolean;

  /** il valore assegnato al radio button. */
  private _value: any = null;

  private _removeUniqueSelectionListener: () => void = () => {};

  constructor(
    @Optional() radioGroup: RadioGroupDirective,
    private _changeDetector: ChangeDetectorRef,
    private _radioDispatcher: UniqueSelectionDispatcher
  ) {
    this.radioGroup = radioGroup;

    this._removeUniqueSelectionListener =
      _radioDispatcher.listen((id: string, name: string) => {
        if (id !== this.id && name === this.name) {
          this.checked = false;
        }
      });
  }

  /**
   * Segna il radio button come da controllare per la change detection.
   */
  _markForCheck() {
    this._changeDetector.markForCheck();
  }

  ngOnInit(): void {
    if (this.radioGroup) {
      // Se il radio button è all'interno di un gruppo, determina se deve essere selezionato
      this.checked = this.radioGroup.value === this._value;
      // Copia il `name` del radio group
      this.name = this.radioGroup.name;
    }
  }

  ngOnDestroy() {
    this._removeUniqueSelectionListener();
  }

  private _emitChangeEvent(): void {
    this.change.emit(new RadioChange(this, this._value));
  }

  _onInputChange(event: Event) {
    event.stopPropagation();

    const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
    this.checked = true;
    this._emitChangeEvent();

    if (this.radioGroup) {
      this.radioGroup._controlValueAccessorChangeFn(this.value);
      this.radioGroup._touch();
      if (groupValueChanged) {
        this.radioGroup._emitChangeEvent();
      }
    }
  }

}
