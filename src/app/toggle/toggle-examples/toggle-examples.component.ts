import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-toggle-examples',
  templateUrl: './toggle-examples.component.html',
  styleUrls: ['./toggle-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ToggleExamplesComponent {
  constructor() {}
}
