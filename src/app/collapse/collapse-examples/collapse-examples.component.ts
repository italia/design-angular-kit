import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-collapse-examples',
  templateUrl: './collapse-examples.component.html',
  styleUrls: ['./collapse-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CollapseExamplesComponent {
  constructor() {}
}
