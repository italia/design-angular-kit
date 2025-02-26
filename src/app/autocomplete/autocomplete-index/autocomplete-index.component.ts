import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-autocomplete-index',
  templateUrl: './autocomplete-index.component.html',
  standalone: false,
})
export class AutocompleteIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItAutocompleteComponent');
  }
}
