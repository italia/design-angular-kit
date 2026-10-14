import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-select-index',
  templateUrl: './select-index.component.html',
  styleUrls: ['./select-index.component.scss'],
  standalone: false,
})
export class SelectIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItSelectComponent');
  }
}
