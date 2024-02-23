import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordInputIndexComponent } from './password-input-index/password-input-index.component';
import { PasswordInputRoutingModule } from './password-input-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PasswordInputExamplesComponent } from './password-input-examples/password-input-examples.component';
import { PasswordInputExampleComponent } from './password-input-example/password-input-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordInputConfirmExampleComponent } from './password-input-confirm-example/password-input-confirm-example.component';
import { PasswordInputValidationExampleComponent } from './password-input-validation-example/password-input-validation-example.component';

@NgModule({
  declarations: [
    PasswordInputIndexComponent,
    PasswordInputExamplesComponent,
    PasswordInputExampleComponent,
    PasswordInputConfirmExampleComponent,
    PasswordInputValidationExampleComponent,
  ],
  imports: [CommonModule, SharedModule, PasswordInputRoutingModule, ReactiveFormsModule, FormsModule],
})
export class PasswordInputModule {}
