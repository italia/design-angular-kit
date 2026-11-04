import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-spinner-index',
  templateUrl: './spinner-index.component.html',
  standalone: false,
})
export class SpinnerIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItSpinnerComponent');
  }
}
