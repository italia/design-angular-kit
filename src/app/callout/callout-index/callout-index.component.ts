import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-callout-index',
  templateUrl: './callout-index.component.html',
  standalone: false,
})
export class CalloutIndexComponent {
  component?: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItCalloutComponent');
  }
}
