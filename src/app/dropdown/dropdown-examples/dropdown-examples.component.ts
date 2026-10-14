import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-dropdown-examples',
  templateUrl: './dropdown-examples.component.html',
  styleUrls: ['./dropdown-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DropdownExamplesComponent {
  constructor() {}
}
