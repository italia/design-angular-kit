import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-dropdown-index',
  templateUrl: './dropdown-index.component.html',
  styleUrls: ['./dropdown-index.component.scss'],
  standalone: false,
})
export class DropdownIndexComponent {
  component: any;
  subcomponent: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItDropdownComponent');
    this.subcomponent = (<any>Documentation).components.find(component => component.name === 'ItDropdownItemComponent');
  }
}
