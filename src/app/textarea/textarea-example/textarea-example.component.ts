import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'it-textarea-example',
  templateUrl: './textarea-example.component.html'
})
export class TextareaExampleComponent {

  ngModelValue?: string;

  formGroup: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      textarea: [null, Validators.maxLength(50)]
    })
  }

}
