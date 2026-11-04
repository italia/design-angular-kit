import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-range-index',
  templateUrl: './range-index.component.html',
  standalone: false,
})
export class RangeIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItRangeComponent');
  }
}
