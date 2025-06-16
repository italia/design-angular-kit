import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-rating-example',
  templateUrl: './rating-example.component.html',
  standalone: false,
})
export class RatingExampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  rating: number = 3;

  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      rating: [0],
    });
  }
}
