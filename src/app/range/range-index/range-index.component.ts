import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-range-index',
  templateUrl: './range-index.component.html',
})
export class RangeIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItRangeComponent');
  }
}
