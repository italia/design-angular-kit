import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-checkbox-examples',
  templateUrl: './checkbox-examples.component.html',
  styleUrls: ['./checkbox-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CheckboxExamplesComponent {
  constructor() {}
}
