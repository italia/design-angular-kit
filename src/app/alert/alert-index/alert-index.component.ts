import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-alert-index',
  templateUrl: './alert-index.component.html',
  standalone: false,
})
export class AlertIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItAlertComponent');
  }
}
