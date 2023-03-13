import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-icon-index',
  templateUrl: './icon-index.component.html'
})
export class IconIndexComponent {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'IconComponent');
  }
}
