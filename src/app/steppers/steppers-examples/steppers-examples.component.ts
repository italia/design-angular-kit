import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-steppers-examples',
  templateUrl: './steppers-examples.component.html',
  styleUrls: ['./steppers-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SteppersExamplesComponent {
  constructor() {}
}
