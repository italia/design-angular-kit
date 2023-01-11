import { Component, Input } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form-component';
import { InputControlType } from '../../../interfaces/form';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { ItValidators } from '../../../validators/it-validators';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { Observable } from 'rxjs';

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

}
