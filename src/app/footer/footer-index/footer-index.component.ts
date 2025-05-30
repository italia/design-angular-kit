import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-go-to-top-index',
  templateUrl: './footer-index.component.html',
  standalone: false,
})
export class FooterIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItFooterComponent');
  }
}
