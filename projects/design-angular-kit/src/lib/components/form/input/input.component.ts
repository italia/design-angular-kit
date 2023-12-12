import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { AutocompleteItem, InputControlType } from '../../../interfaces/form';
import { AbstractControl, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ItValidators } from '../../../validators/it-validators';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { debounceTime, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { AsyncPipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { MarkMatchingTextPipe } from '../../../pipes/mark-matching-text.pipe';

@Component({
  standalone: true,
  selector: 'it-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, ReactiveFormsModule, TranslateModule, AsyncPipe, ItIconComponent, MarkMatchingTextPipe, NgTemplateOutlet, NgForOf]
})
export class ItInputComponent extends ItAbstractFormComponent<string | number | null | undefined> implements OnInit {

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
  @Input() description: string | undefined;

  /**
   * To prevent modification of the contained value.
   * - <b>plaintext</b>: Readonly field in the form stylized as plain text
   */
  @Input() readonly: BooleanInput | 'plaintext' | undefined;

  /**
   * The max date value [Used only in type = 'date']
   * @default '9999-12-31'
   * @example 'yyyy-mm-dd'
   */
  @Input() maxDate?: string = '9999-12-31';

  /**
   * The min date value [Used only in type = 'date']
   * @example 'yyyy-mm-dd'
   */
  @Input() minDate: string | undefined;

  /**
   * The max value [Used only in type = 'number']
   */
  @Input() max: number | undefined;

  /**
   * The min value [Used only in type = 'number']
   */
  @Input() min: number | undefined;

  /**
   * The step value [Used only in type = 'number']
   */
  @Input() step: number | 'any' | undefined;

  /**
   * If is a currency number [Used only in type = 'number']
   */
  @Input() currency: BooleanInput | undefined;

  /**
   * If is a percentage number [Used only in type = 'number']
   */
  @Input() percentage: BooleanInput | undefined;

  /**
   * To make the numeric field automatically resize according to the value contained in it. [Used only in type = 'number']
   */
  @Input() adaptive: BooleanInput | undefined;

  /**
   * Input autocomplete attribute (Browser autocomplete)
   * @default undefined
   */
  @Input() autocomplete: string | undefined;

  /**
   * Indicates the list of searchable elements on which to base the input autocomplete system [Optional. Used only in type = 'search']
   * If you need to retrieve items via API, can pass a function of Observable
   * @default undefined
   */
  @Input() autocompleteData?: Array<AutocompleteItem> | ((search?: string | number | null) => Observable<Array<AutocompleteItem>>);

  /**
   * Time span [ms] has passed without another source emission, to delay data filtering.
   * Useful when the user is typing multiple letters
   * @default 300 [ms]
   */
  @Input() autocompleteDebounceTime: number = 300;

  /**
   * Fired when the Autocomplete Item has been selected
   */
  @Output() autocompleteSelectedEvent: EventEmitter<AutocompleteItem> = new EventEmitter();

  protected showAutocompletion = false;


  get isActiveLabel(): boolean {
    const value = this.control.value;
    if ((!!value && value !== 0) || value === 0 || !!this.placeholder) {
      return true;
    }

    if (this.type === 'number' && (isTrueBooleanInput(this.currency) || isTrueBooleanInput(this.percentage))) {
      return true;
    }

    return this.type === 'date' || this.type === 'time' || this.type === 'color';
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
    if (this.hasError('invalidIban')) {
      return this._translateService.get('it.errors.iban-invalid');
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

  /** Observable da cui vengono emessi i risultati dell'auto completamento */
  autocompleteResults$: Observable<{
    searchedValue: string | number | null | undefined,
    relatedEntries: Array<AutocompleteItem>
  }> = new Observable();


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
    this.autocompleteResults$ = this.getAutocompleteResults$();
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


  /**
   * Create the autocomplete list
   */
  private getAutocompleteResults$(): Observable<{ searchedValue: string | number | null | undefined, relatedEntries: Array<AutocompleteItem> }> {
    if (this.type !== 'search') {
      return of({ searchedValue: '', relatedEntries: [] });
    }
    return this.control.valueChanges.pipe(
      debounceTime(this.autocompleteDebounceTime), // Delay filter data after time span has passed without another source emission, useful when the user is typing multiple letters
      distinctUntilChanged(), // Only if searchValue is distinct in comparison to the last value
      switchMap(searchedValue => {
        if (!this.autocompleteData) {
          return of({ searchedValue, relatedEntries: <Array<AutocompleteItem>>[] });
        }

        const autoCompleteData$ = Array.isArray(this.autocompleteData) ? of(this.autocompleteData) : this.autocompleteData(searchedValue);
        return autoCompleteData$.pipe(
          map(autocompleteData => {
            if (!searchedValue || typeof searchedValue === 'number') {
              return { searchedValue, relatedEntries: [] };
            }

            const lowercaseValue = searchedValue.toLowerCase();
            const relatedEntries = autocompleteData.filter(item => item.value?.toLowerCase().includes(lowercaseValue));

            return { searchedValue, relatedEntries };
          })
        );
      })
    );
  }

  onEntryClick(entry: AutocompleteItem, event: Event) {
    // Se non è stato definito un link associato all'elemento dell'autocomplete, probabilmente il desiderata
    // non è effettuare la navigazione al default '#', pertanto in tal caso meglio annullare la navigazione.
    if (!entry.link) {
      event.preventDefault();
    }

    this.autocompleteSelectedEvent.next(entry);
    this.control.setValue(entry.value);
    this.showAutocompletion = false;
  }

  autocompleteItemTrackByValueFn(index: number, item: AutocompleteItem) {
    return item.value;
  }

  onKeyDown() {
    this.showAutocompletion = this.type === 'search';
  }
}
