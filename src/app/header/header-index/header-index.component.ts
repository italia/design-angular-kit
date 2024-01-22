import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-header-index',
  templateUrl: './header-index.component.html'
})
export class HeaderIndexComponent {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItHeaderComponent');
  }

}
