import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-spinner-index',
  templateUrl: './spinner-index.component.html'
})
export class SpinnerIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'SpinnerComponent');
  }
}
