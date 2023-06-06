import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-error-page-index',
  templateUrl: './error-page-index.component.html'
})
export class ErrorPageIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItErrorPageComponent');
  }
}
