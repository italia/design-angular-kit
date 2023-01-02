import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-dimmer-index',
  templateUrl: './dimmer-index.component.html'
})
export class DimmerIndexComponent {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'DimmerComponent');
  }
}
