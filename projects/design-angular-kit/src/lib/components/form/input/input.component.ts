import { Component, Input } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form-component';
import { AutoCompleteItem, InputControlType } from '../../../interfaces/form';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { ItValidators } from '../../../validators/it-validators';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { from, map, Observable } from 'rxjs';

@Component({
  selector: 'it-input[id]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends AbstractFormComponent<string | number> {

  /**
   * The input type
   * @default text
   */
  @Input() type: InputControlType = 'text';

  /**
   * The input placeholder
   */
  @Input() placeholder: string = '';

  /**
   * The input description
   */
  @Input() description?: string;

  /**
   * To prevent modification of the contained value.
   * - <b>plaintext</b>: Readonly field in the form stylized as plain text
   */
  @Input() readonly?: BooleanInput | 'plaintext';

  /**
   * The max value [Used only in type = 'number']
   */
  @Input() max?: number;

  /**
   * The min value [Used only in type = 'number']
   */
  @Input() min?: number;

  /**
   * The step value [Used only in type = 'number']
   */
  @Input() step?: number | 'any';

  /**
   * If is a currency number [Used only in type = 'number']
   */
  @Input() currency?: BooleanInput;

  /**
   * If is a percentage number [Used only in type = 'number']
   */
  @Input() percentage?: BooleanInput;

  /**
   * To make the numeric field automatically resize according to the value contained in it. [Used only in type = 'number']
   */
  @Input() adaptive?: BooleanInput;

  /**
   * Opzionale.
   * Disponibile solo se il type è search.
   * Indica la lista di elementi ricercabili su cui basare il sistema di autocompletamento della input
   */
  @Input()
  set autoCompleteData(value: Array<AutoCompleteItem>) { this._autoCompleteData = value; }
  get autoCompleteData(): Array<AutoCompleteItem> { return this._autoCompleteData; }
  private _autoCompleteData: Array<AutoCompleteItem>;

  showAutocompletion = false;


  get isActiveLabel(): boolean {
    const value = this.control.value;
    if ((!!value && value !== 0) || value === 0 || !!this.placeholder) {
      return true;
    }

    if (this.type === 'number' && (isTrueBooleanInput(this.currency) || isTrueBooleanInput(this.percentage))) {
      return true;
    }

    return this.type === 'date' || this.type === 'time';
  }

  /**
   * Check is readonly field
   */
  get isReadonly(): boolean {
    return this.readonly === 'plaintext' || isTrueBooleanInput(this.readonly);
  }

  /**
   * Return the invalid message string from TranslateService
   */
  override get invalidMessage(): Observable<string> {
    if (this.hasError('min') && this.min) {
      return this._translateService.get('it.errors.min-invalid', {
        min: this.min
      });
    }
    if (this.hasError('max') && this.max) {
      return this._translateService.get('it.errors.max-invalid', {
        max: this.max
      });
    }
    if (this.hasError('minlength')) {
      const error = this.getError('minlength');
      return this._translateService.get('it.errors.min-length-invalid', { min: error.requiredLength });
    }
    if (this.hasError('maxlength')) {
      const error = this.getError('maxlength');
      return this._translateService.get('it.errors.max-length-invalid', { max: error.requiredLength });
    }
    if (this.hasError('email') || this.hasError('invalidEmail')) {
      return this._translateService.get('it.errors.email-invalid');
    }
    if (this.hasError('invalidTel')) {
      return this._translateService.get('it.errors.tel-invalid');
    }
    if (this.hasError('invalidUrl')) {
      return this._translateService.get('it.errors.url-invalid');
    }
    if (this.hasError('invalidTaxCode')) {
      return this._translateService.get('it.errors.tax-code-invalid');
    }
    if (this.hasError('invalidVatNumber')) {
      return this._translateService.get('it.errors.vat-number-invalid');
    }
    if (this.hasError('invalidCap')) {
      return this._translateService.get('it.errors.cap-invalid');
    }
    if (this.hasError('invalidRegex')) {
      return this._translateService.get('it.errors.regex-invalid');
    }
    if (this.hasError('pattern')) {
      const error = this.getError('pattern');
      return this._translateService.get('it.errors.pattern-invalid', { pattern: error.requiredPattern });
    }

    return super.invalidMessage;
  }

  override ngOnInit() {
    super.ngOnInit();

    const validators: Array<ValidatorFn> = [];
    switch (this.type) {
      case 'number':
        if (isTrueBooleanInput(this.percentage)) {
          this.min = this.min || 0;
          this.max = this.max || 100;
        }

        // Dynamic min/max validators
        validators.push((control: AbstractControl) => this.min ? Validators.min(this.min)(control) : null);
        validators.push((control: AbstractControl) => this.max ? Validators.max(this.max)(control) : null);
        break;
      case 'email':
        validators.push(ItValidators.email);
        break;
      case 'tel':
        validators.push(ItValidators.tel);
        break;
      case 'url':
        validators.push(ItValidators.url);
        break;
    }

    this.addValidators(validators);
    this.autocompleteSuggestedEntries$ = this.getRelatedEntries();
  }

  /**
   * Increment or decrease the input number value of step
   * @param decrease true to decrease value
   */
  incrementNumber(decrease: boolean = false): void {
    if (this.type !== 'number') {
      return;
    }
    const step = (this.step === 'any' ? 1 : (this.step ?? 1));
    let value = Number(this.control.value);
    value = (isNaN(value) ? 0 : value) + (decrease ? -step : step);
    value = Math.round(value * 1e12) / 1e12; // prevent js decimal error

    if (this.min !== undefined && value < this.min) {
      value = this.min;
    } else if (this.max !== undefined && value > this.max) {
      value = this.max;
    }

    this.control.setValue(value);
  }


  autocompleteSuggestedEntries$: Observable<Array<AutoCompleteItem>>;

  getRelatedEntries() {

    if(this.type === 'search') {
      return this.control.valueChanges.pipe(map((value) => {

        if (value) {
          const lowercaseValue = value.toLowerCase();
          const lowercaseData = this._autoCompleteData.filter((item) => item.value).map(item => {
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
      }));
    } else {
      return from([]);
    }
    
  }

  isAutocompletable() {
    if (this._autoCompleteData && this.type === 'search') {
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
    this.control.setValue(entry.value);
    this.showAutocompletion = false;
  }

  autocompleteItemTrackByValueFn(index: number, item: AutoCompleteItem) {
    return item.value;
  }

  onKeyDown() {
    this.showAutocompletion = this.type === 'search';
  }
}
