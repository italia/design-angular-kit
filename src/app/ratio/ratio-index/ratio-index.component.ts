import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-ratio-index',
  templateUrl: './ratio-index.component.html',
  standalone: false,
})
export class RatioIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItRatioDirective');
  }
}
