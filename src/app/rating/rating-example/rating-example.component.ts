import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'it-rating-example',
  templateUrl: './rating-example.component.html'
})
export class RatingExampleComponent {
  rating: number = 3;

  formGroup: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      rating: [0]
    })
  }
}
