import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-card-index',
  templateUrl: './card-index.component.html',
})
export class CardIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItCardComponent');
  }
}
