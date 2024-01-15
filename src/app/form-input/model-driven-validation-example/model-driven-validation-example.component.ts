import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ItValidators } from 'design-angular-kit/validators/it-validators';

@Component({
  selector: 'it-model-driven-validation-example',
  templateUrl: './model-driven-validation-example.component.html',
  styleUrls: ['./model-driven-validation-example.component.scss']
})
export class ModelDrivenValidationExampleComponent {

  myForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    const validators = [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern('[ab]+')
    ];
    this.myForm = this._fb.group({
      taxCode: [null, ItValidators.taxCode],
      vat: [null, ItValidators.vatNumber],
      cap: [null, ItValidators.cap],
      email: [null],
      url: [null],
      phone: [null],
      iban: [null, ItValidators.iban],
      myInput: ['', validators],
    });
  }

  value = '';
  savedValue = undefined;

  save(form: UntypedFormGroup) {
    this.savedValue = form.value.myInput;
  }

  markAllAsTouched() {
    this.myForm.markAllAsTouched();
  }
}
