import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-password-input-validation-example',
  templateUrl: './password-input-validation-example.component.html'
})
export class PasswordInputValidationExampleComponent {

  formGroup: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      password: [null],
      passwordCustom: [null],
      passwordStrengthMeter: [null]
    });
  }

}
