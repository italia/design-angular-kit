import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-range-example',
  templateUrl: './range-example.component.html',
  standalone: false,
})
export class RangeExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  rangeValue = 50;

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      range: [null],
    });
  }
}
