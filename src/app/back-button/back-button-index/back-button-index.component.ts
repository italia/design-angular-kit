import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-go-back-index',
  templateUrl: './back-button-index.component.html'
})
export class BackButtonIndexComponent {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItBackButtonComponent');
  }
}
