import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-list-index',
  templateUrl: './list-index.component.html'
})
export class ListIndexComponent {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItListComponent');
  }

}
