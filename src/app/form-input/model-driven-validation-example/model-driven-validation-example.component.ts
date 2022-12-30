import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';

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
      myInput: ['', validators]
    });
  }

  value = '';
  savedValue = undefined;

  save(form: UntypedFormGroup) {
    this.savedValue = form.value.myInput;
  }

}
