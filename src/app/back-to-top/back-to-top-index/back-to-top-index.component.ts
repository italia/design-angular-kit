import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-go-to-top-index',
  templateUrl: './back-to-top-index.component.html',
})
export class BackToTopIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItBackToTopComponent');
  }
}
