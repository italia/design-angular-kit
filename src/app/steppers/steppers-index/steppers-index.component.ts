import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-steppers-index',
  templateUrl: './steppers-index.component.html'
})
export class SteppersIndexComponent {
  steppersContainer: any;
  steppersItem: any;

  constructor() {
    this.steppersContainer = (<any>Documentation).components.find(component => component.name === 'SteppersContainerComponent');
    this.steppersItem = (<any>Documentation).components.find(component => component.name === 'SteppersItemComponent');
  }
}
