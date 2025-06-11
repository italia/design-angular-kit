import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'it-textarea-example',
  templateUrl: './textarea-example.component.html',
  standalone: false,
})
export class TextareaExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  ngModelValue?: string;

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      textarea: [null, Validators.maxLength(50)],
    });
  }
}
