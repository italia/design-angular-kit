import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-tabs-examples',
  templateUrl: './tabs-examples.component.html',
  styleUrls: ['./tabs-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TabsExamplesComponent {
  constructor() {}
}
