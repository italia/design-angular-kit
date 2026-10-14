import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-autocomplete-index',
  templateUrl: './autocomplete-index.component.html',
  standalone: false,
  styleUrls: ['./autocomplete-index.component.scss'],
})
export class AutocompleteIndexComponent {
  autocompleteComponent: any;

  constructor() {
    this.autocompleteComponent = (<any>Documentation).components.find((component: any) => component.name === 'ItAutocompleteComponent');
  }
}
