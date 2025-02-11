import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-skiplink-index',
  templateUrl: './skiplink-index.component.html',
})
export class SkiplinkIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItSkiplinkComponent');
  }
}
