import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-badge-examples',
  templateUrl: './badge-examples.component.html',
  styleUrls: ['./badge-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BadgeExamplesComponent {
  constructor() {}
}
