import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-steppers-index',
  templateUrl: './steppers-index.component.html',
  standalone: false,
})
export class SteppersIndexComponent {
  steppersContainer: any;
  steppersItem: any;

  constructor() {
    this.steppersContainer = (<any>Documentation).components.find((component: any) => component.name === 'ItSteppersContainerComponent');
    this.steppersItem = (<any>Documentation).components.find((component: any) => component.name === 'ItSteppersItemComponent');
  }
}
