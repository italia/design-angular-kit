import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-dimmer-index',
  templateUrl: './dimmer-index.component.html',
  standalone: false,
})
export class DimmerIndexComponent {
  component?: any;
  componentButtons?: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItDimmerComponent');
    this.componentButtons = (<any>Documentation).components.find(component => component.name === 'ItDimmerButtonsComponent');
  }
}
