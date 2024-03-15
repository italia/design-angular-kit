import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-pagination-index',
  templateUrl: './pagination-index.component.html',
})
export class PaginationIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItPaginationComponent');
  }
}
