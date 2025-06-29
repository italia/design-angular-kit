import { ControlContainer, ControlValueAccessor, FormControl, FormGroup, NgControl, ValidatorFn } from '@angular/forms';
import { Component, DoCheck, Input, OnInit, inject } from '@angular/core';
import { ItAbstractComponent } from './abstract.component';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { inputToBoolean } from '../utils/coercion';

@Component({
  template: '',
  standalone: false,
})
export abstract class ItAbstractFormComponent<T = any> extends ItAbstractComponent implements OnInit, ControlValueAccessor, DoCheck {
  protected readonly _translateService = inject(TranslateService);
  protected readonly _ngControl = inject(NgControl, { self: true, optional: true });
  protected fgd? = inject(ControlContainer, { optional: true });

  /**
   * The label of form control
   */
  @Input() label?: string;

  /**
   * Validation color display mode (validation triggered if field is touched or not pristine)
   * - <b>true</b>: Always show the validation color
   * - <b>false</b>: Never show validation color
   * - <b>only-valid</b>: Show only valid validation color
   * - <b>only-invalid</b>: Show only invalid validation color
   * @default <b>false</b>: Do not show the validation color by default
   */
  @Input() validationMode: boolean | 'only-valid' | 'only-invalid' = false;

  /**
   * Set the disabled state
   */
  @Input({ transform: inputToBoolean }) set disabled(isDisabled: boolean) {
    this.setDisabledState(isDisabled);
  }

  /**
   * Internal form control
   */
  protected control: FormControl<T>;

  constructor() {
    super();
    this.control = new FormControl();
    this._ngControl && (this._ngControl.valueAccessor = this);
  }

  /**
   * Check if field is invalid (Validation failed)
   */
  get isInvalid(): boolean | undefined {
    if (this.validationMode === 'only-valid' || (this.validationMode !== 'only-invalid' && !this.validationMode)) {
      return undefined;
    }

    if (this._ngControl) {
      return this._ngControl.invalid === true && (!this._ngControl.pristine || this._ngControl.touched === true);
    }
    return this.control.invalid && (!this.control.pristine || this.control.touched);
  }

  /**
   * Check if field is valid (Validation successful)
   */
  get isValid(): boolean | undefined {
    if (this.validationMode === 'only-invalid' || (this.validationMode !== 'only-valid' && !this.validationMode)) {
      return undefined;
    }

    if (this._ngControl) {
      return this._ngControl.valid === true && (!this._ngControl.pristine || this._ngControl.touched === true);
    }
    return this.control.valid && (!this.control.pristine || this.control.touched);
  }

  /**
   * Return the invalid message string from TranslateService
   */
  get invalidMessage(): Observable<string> {
    if (this.hasError('required')) {
      return this._translateService.get('it.errors.required-field');
    }

    return this._translateService.get('it.errors.invalid-field');
  }

  ngOnInit(): void {
    if (this._ngControl?.control) {
      this.control.setValidators((this._ngControl.control as FormControl).validator);
      this.setValidationModeWhenInAForm();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (_: T) => {};

  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      return this.control.disable();
    }
    this.control.enable();
  }

  writeValue(value: T): void {
    this.control.setValue(value, { emitEvent: false });
    this._changeDetectorRef.detectChanges();
  }

  /**
   * Mark the control as touched
   */
  markAsTouched(): void {
    if (!this.control.touched) {
      this.onTouched();
    }
  }

  /**
   * Fired to check if form control is touched
   */
  ngDoCheck() {
    if (this._ngControl?.control) {
      const ngControl = this._ngControl.control;
      if (this.control.touched !== ngControl.touched) {
        if (ngControl.touched) {
          this.control.markAsTouched();
        } else {
          this.control.markAsUntouched();
        }
      }
      if (this.control.pristine !== ngControl.pristine) {
        if (ngControl.pristine) {
          this.control.markAsPristine();
        } else {
          this.control.markAsDirty();
        }
      }
    }
    this._changeDetectorRef.detectChanges();
  }

  /**
   * Add the validators in control and parent control
   * @param validators the validators
   * @protected
   */
  protected addValidators(validators: ValidatorFn | ValidatorFn[]): void {
    if (!Array.isArray(validators)) {
      validators = [validators];
    }

    validators.forEach(validator => {
      if (!this.control.hasValidator(validator)) {
        this.control.addValidators(validator);
      }

      if (this._ngControl?.control && !this._ngControl.control.hasValidator(validator)) {
        this._ngControl.control.addValidators(validator);
      }
    });
  }

  /**
   * Reports whether the control with the given path has the error specified. <br/>
   * If the control is not present, false is returned.
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   * @returns whether the given error is present in the control at the given path.
   */
  public hasError(errorCode: string, path?: Array<string | number> | string): boolean {
    if (this._ngControl) {
      return this._ngControl.hasError(errorCode, path);
    }
    return this.control.hasError(errorCode, path);
  }

  /**
   * Reports error data for the control with the given path.
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  public getError(errorCode: string, path?: Array<string | number> | string): any {
    if (this._ngControl) {
      return this._ngControl.getError(errorCode, path);
    }
    return this.control.getError(errorCode, path);
  }

  // This function assurest that validation mode remains complaiant with the Design kit
  // When the validation mode is `false` and input elements are wrapped in a `FormGroup`
  // validation mode is automatically set to `true`.
  private setValidationModeWhenInAForm() {
    const isInAForm: boolean = this.fgd?.control instanceof FormGroup;
    if (isInAForm && this.validationMode == false) {
      this.validationMode = true;
    }
  }
}
