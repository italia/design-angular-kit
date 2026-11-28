import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-autocomplete-examples',
  templateUrl: './autocomplete-examples.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./autocomplete-examples.component.scss'],
})
export class AutocompleteExamplesComponent {
  constructor() {}
}
