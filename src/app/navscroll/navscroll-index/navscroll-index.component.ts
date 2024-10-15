import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-navscroll-index',
  templateUrl: './navscroll-index.component.html',
})
export class NavscrollIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItNavscrollComponent');
  }
}
