import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItValidators } from 'design-angular-kit/validators/it-validators';

@Component({
  selector: 'it-password-input-confirm-example',
  templateUrl: './password-input-confirm-example.component.html',
  standalone: false,
})
export class PasswordInputConfirmExampleComponent {
  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group(
      {
        password: [null],
        confirmPassword: [null],
      },
      {
        validators: control => ItValidators.passwordMatch(control),
      }
    );
  }
}
