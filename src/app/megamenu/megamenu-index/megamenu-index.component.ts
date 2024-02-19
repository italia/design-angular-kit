import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-megamenu-index',
  templateUrl: './megamenu-index.component.html',
})
export class MegamenuIndexComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;

  constructor() {
    this.component = Documentation.components.find(component => component.name === 'ItMegamenuComponent');
  }
}
