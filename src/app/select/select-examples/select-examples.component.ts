import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-select-examples',
  templateUrl: './select-examples.component.html',
  styleUrls: ['./select-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SelectExamplesComponent {
  constructor() {}
}
