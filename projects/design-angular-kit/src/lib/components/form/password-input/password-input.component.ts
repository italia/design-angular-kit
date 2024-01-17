import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { ItValidators } from '../../../validators/it-validators';
import { map, Observable } from 'rxjs';
import { InputPassword } from 'bootstrap-italia';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, ReactiveFormsModule, ItIconComponent, AsyncPipe, TranslateModule]
})
export class ItPasswordInputComponent extends ItAbstractFormComponent<string | null | undefined> implements OnInit, AfterViewInit {

  /**
   * The field is required
   * @default true
   */
  @Input() required: boolean = true;

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
   * - <b>true</b>: show the StrengthMeter description message
   * - <b>string</b>: show custom description
   * @default true for StrengthMeter mode else is undefined
   */
  @Input() description: string | true | undefined;

  /**
   * Enable to show the strength meter
   * @default false
   */
  @Input({ transform: inputToBoolean }) showStrengthMeter?: boolean;

  /**
   * Is the confirmation password field
   * @default false
   */
  @Input({ transform: inputToBoolean }) confirmPasswordField?: boolean;

  /**
   * Input autocomplete attribute (Browser autocomplete)
   * @default undefined
   */
  @Input() autocomplete: string | undefined;

  private inputPasswordBs?: InputPassword;

  @ViewChild('input') private inputElement?: ElementRef<HTMLInputElement>;

  override ngOnInit() {
    super.ngOnInit();

    if (!this.confirmPasswordField) {
      this.addValidators(ItValidators.password(
        this.minLength,
        this.useNumber,
        this.useCapitalCase,
        this.useSmallCase,
        this.useSpecialCharacters,
        this.required
      ));
    } else if (this.required) {
      this.addValidators(Validators.required);
    }
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();

    if (this.inputElement) {
      this.inputPasswordBs = InputPassword.getOrCreateInstance(this.inputElement.nativeElement, {
        showText: this.isStrengthMeter,
        minimumLength: this.minLength
      });
    }
  }

  protected get isStrengthMeter(): boolean {
    return !this.confirmPasswordField && !!this.showStrengthMeter;
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

  /**
   * Retrieve the default StrengthMeter description message from TranslateService
   */
  protected get strengthMeterDescription(): Observable<string> {
    const keys = ['it.form.password-strength-meter.description.default'];
    if (this.useNumber) {
      keys.push('it.form.password-strength-meter.description.number');
    }
    if (this.useCapitalCase) {
      keys.push('it.form.password-strength-meter.description.capital-case');
    }
    if (this.useSpecialCharacters) {
      keys.push('it.form.password-strength-meter.description.special-character');
    }

    return this._translateService.get(keys, { minLength: this.minLength }).pipe(
      map(labels => Object.values(labels).join(', '))
    );
  }
}
