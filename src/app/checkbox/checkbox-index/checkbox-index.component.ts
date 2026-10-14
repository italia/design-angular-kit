import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-checkbox-index',
  templateUrl: './checkbox-index.component.html',
  styleUrls: ['./checkbox-index.component.scss'],
  standalone: false,
})
export class CheckboxIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItCheckboxComponent');
  }
}
