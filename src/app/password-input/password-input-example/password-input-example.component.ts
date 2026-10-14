import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-password-input-example',
  templateUrl: './password-input-example.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PasswordInputExampleComponent {
  password?: string;
  passwordText?: string;
  passwordStrengthMeter?: string;
}
