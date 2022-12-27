import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form-component';
import { ItValidators } from '../../../validators/it-validators';
import { Observable } from 'rxjs';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

// Note: not use import from 'bootstrap-italia' to prevent duplicate import (js loaded from angular.json)
// TODO: bootstrap-italia npm es6 import error -> import { InputPassword } from 'bootstrap-italia';
declare let bootstrap: any;

@Component({
  selector: 'it-password-input[id]',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent extends AbstractFormComponent<string> {

  /**
   * The password minimum length
   * @default 10
   */
  @Input() minLength: number = 10;

  /**
   * The password must contain at least one number
   * @default true
   */
  @Input() useNumber: boolean = true;

  /**
   * The password must contain at least one uppercase character
   * @default true
   */
  @Input() useCapitalCase: boolean = true;

  /**
   * The password must contain at least one lowercase character
   * @default true
   */
  @Input() useSmallCase: boolean = true;

  /**
   * The password must contain at least one special character
   * @default true
   */
  @Input() useSpecialCharacters: boolean = true;

  /**
   * The input placeholder
   */
  @Input() placeholder: string = '';

  /**
   * The input description
   */
  @Input() description?: string;

  /**
   * Enable to show the strength meter
   */
  @Input() showStrengthMeter?: BooleanInput;

  inputPasswordBs?: any;

  @ViewChild('input')
  private inputElement?: ElementRef<HTMLInputElement>;

  override ngOnInit() {
    super.ngOnInit();

    this.addValidators(ItValidators.password(
      this.minLength,
      this.useNumber,
      this.useCapitalCase,
      this.useSmallCase,
      this.useSpecialCharacters
    ));
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    if (this.inputElement) {
      this.inputPasswordBs = new bootstrap.InputPassword(this.inputElement.nativeElement, {
        ...this.description && { enterPass: this.description },
        showText: this.isStrengthMeter,
        minimumLength: this.minLength
      });
    }
  }

  get isStrengthMeter(): boolean {
    return isTrueBooleanInput(this.showStrengthMeter);
  }

  /**
   * Return the invalid message string from TranslateService
   */
  override get invalidMessage(): Observable<string> {
    if (this.hasError('noPasswordMatch')) {
      return this._translateService.get('it.errors.password-no-match');
    }
    if (this.hasError('minlength')) {
      return this._translateService.get('it.errors.password-min-length', {
        minLength: this.minLength
      });
    }
    if (this.hasError('hasNumber')) {
      return this._translateService.get('it.errors.password-number');
    }
    if (this.hasError('hasCapitalCase')) {
      return this._translateService.get('it.errors.password-capital-case');
    }
    if (this.hasError('hasSmallCase')) {
      return this._translateService.get('it.errors.password-capital-case');
    }
    if (this.hasError('hasSpecialCharacters')) {
      return this._translateService.get('it.errors.password-special-character');
    }

    return super.invalidMessage;
  }
}
