import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-search-index',
  templateUrl: './search-index.component.html',
})
export class SearchIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItSearchComponent');
  }
}
