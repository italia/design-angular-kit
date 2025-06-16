import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-password-input-validation-example',
  templateUrl: './password-input-validation-example.component.html',
  standalone: false,
})
export class PasswordInputValidationExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      password: [null],
      passwordCustom: [null],
      passwordStrengthMeter: [null],
    });
  }
}
