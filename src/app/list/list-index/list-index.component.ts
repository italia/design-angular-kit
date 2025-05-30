import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-list-index',
  templateUrl: './list-index.component.html',
  standalone: false,
})
export class ListIndexComponent {
  component: any;
  subcomponent: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItListComponent');
    this.subcomponent = (<any>Documentation).components.find(component => component.name === 'ItListItemComponent');
  }
}
