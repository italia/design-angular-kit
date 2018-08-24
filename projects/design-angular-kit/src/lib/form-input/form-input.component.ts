import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { InputType, INPUT_TYPES } from '../models/InputType';
import { Util } from '../util/util';

let identifier = 0;

/**
 * Elementi e stili per la creazione di input accessibili e responsivi.
 */
@Component({
  selector: 'it-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent {
  id = `form-input-${identifier++}`;

  /**
   * Indica il tipo di campo. Puo' assumere i valori text, email, password, number, tel, search
   */
  @Input()
  get type(): any {
    return this._type;
  }
  set type(value: any) {
    if (InputType.is(value)) {
      this._type = value;
      this._isPasswordMode = this._type === INPUT_TYPES.PASSWORD;
      this._isPasswordVisible = false;
    } else {
      this._type = INPUT_TYPES.TEXT;
    }
  }
  private _type = INPUT_TYPES.TEXT;

  /**
   * Indica il valore della label da visualizzare
   */
  @Input()
  get label(): string { return this._label; }
  set label(value: string) { this._label = value; }
  private _label = undefined;

  /**
   * Indica il testo di aiuto sotto la input
   */
  @Input()
  get note(): string { return this._note; }
  set note(value: string) { this._note = value; }
  private _note = undefined;

  /**
   * Indica il testo presente nel campo vuoto
   */
  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) { this._placeholder = value; }
  private _placeholder = undefined;

  /**
   * Opzionale.
   * Disponibile solo se il type è password.
   * Se presente indica se il widget di robustezza password è presente.
   * Accetta una espressione booleana o può essere usato come attributo senza valore
   */
  @Input()
  get pwStrengthMeter(): boolean { return this._pwStrengthMeter; }
  set pwStrengthMeter(value: boolean) { this._pwStrengthMeter = Util.coerceBooleanProperty(value); }
  private _pwStrengthMeter = false;

  /**
   * Indica l'icona da visualizzare a sinistra del campo di input
   */
  @Input()
  get icon(): string { return this._icon; }
  set icon(value: string) { this._icon = value; }
  private _icon = undefined;

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
  get readOnly(): boolean { return this._readOnly; }
  set readOnly(value: boolean) { this._readOnly = Util.coerceBooleanProperty(value); }
  private _readOnly = false;

  /**
   * Opzionale.
   * Disponibile solo se il type è search.
   * Indica la lista di elementi ricercabili su cui basare il sistema di autocompletamento della input
   */
  @Input()
  get autoCompleteData(): Array<string> { return this._autoCompleteData; }
  set autoCompleteData(value: Array<string>) { this._autoCompleteData = value; }
  private _autoCompleteData: Array<string>;

  get isLabelActive() {
    return this._isLabelActive;
  }
  set isLabelActive(value: boolean) {
    this._isLabelActive = value;
  }
  private _isLabelActive = false;


  get isPasswordMode() {
    return this._isPasswordMode;
  }
  set isPasswordMode(value: boolean) {
    this._isPasswordMode = value;
  }
  private _isPasswordMode = false;

  get isPasswordVisible() {
    return this._isPasswordVisible;
  }
  set isPasswordVisible(value: boolean) {
    this._isPasswordVisible = value;
    this._type = this._isPasswordVisible ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD;
  }
  private _isPasswordVisible = false;

  onFocus() {
    this._isLabelActive = true;
  }

  onBlur(target) {
    const inputValue: string = target.value;
    if (inputValue.length === 0) {
      this._isLabelActive = false;
      if (this.type === INPUT_TYPES.NUMBER) {
        target.value = '';
      }
    }
  }

  get isAutocompletable() {
    if (this._autoCompleteData && this._type === INPUT_TYPES.SEARCH) {
      return this._autoCompleteData.length > 0;
    } else {
      return false;
    }
  }

  constructor() { }

}
