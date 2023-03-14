import { ControlValueAccessor, FormControl, NgControl, ValidatorFn } from '@angular/forms';
import { Component, DoCheck, Input, OnInit, Optional, Self } from '@angular/core';
import { AbstractComponent } from './abstract.component';
import { BooleanInput, isFalseBooleanInput, isTrueBooleanInput } from '../utils/boolean-input';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({ template: '' })
export abstract class AbstractFormComponent<T = any> extends AbstractComponent implements OnInit, ControlValueAccessor, DoCheck {

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
   * @default <b>only-invalid</b>: Show only invalid validation color
   */
  @Input() validationMode: BooleanInput | 'only-valid' | 'only-invalid' = 'only-invalid';

  /**
   * Set the disabled state
   */
  @Input() set disabled(isDisabled: BooleanInput) {
    this.setDisabledState(isTrueBooleanInput(isDisabled));
  }

  /**
   * Internal form control
   */
  control: FormControl;

  constructor(
    protected readonly _translateService: TranslateService,
    @Self() @Optional() protected readonly _ngControl: NgControl
  ) {
    super();
    this.control = new FormControl();
    this._ngControl && (this._ngControl.valueAccessor = this);
  }

  /**
   * Check if field is invalid (Validation failed)
   */
  get isInvalid(): boolean | undefined {
    if (this.validationMode === 'only-valid' || (this.validationMode !== 'only-invalid' && isFalseBooleanInput(this.validationMode))) {
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
    if (this.validationMode === 'only-invalid' || (this.validationMode !== 'only-valid' && isFalseBooleanInput(this.validationMode))) {
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
    if (this.control.hasError('required')) {
      return this._translateService.get('it.errors.required-field');
    }

    return this._translateService.get('it.errors.invalid-field');
  }

  ngOnInit(): void {
    if (this._ngControl?.control) {
      this.control.setValidators((this._ngControl.control as FormControl).validator);
    }
  }

  onChange = (_: T) => {
  };

  onTouched = () => {
  };

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
    if (!this._ngControl?.control) {
      return;
    }

    const ngControl = this._ngControl.control;
    if (this.control.touched !== ngControl.touched) {
      if (ngControl.touched) {
        this.control.markAsTouched();
      } else {
        this.control.markAsUntouched();
      }
      this._changeDetectorRef.detectChanges();
    }
    if (this.control.pristine !== ngControl.pristine) {
      if (ngControl.pristine) {
        this.control.markAsPristine();
      } else {
        this.control.markAsDirty();
      }
      this._changeDetectorRef.detectChanges();
    }
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
}
