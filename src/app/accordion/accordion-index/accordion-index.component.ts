import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-accordion-index',
  templateUrl: './accordion-index.component.html'
})
export class AccordionIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'AccordionComponent');
  }
}
