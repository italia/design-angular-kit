import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-radio-examples',
  templateUrl: './radio-examples.component.html',
  styleUrls: ['./radio-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RadioExamplesComponent {
  constructor() {}
}
