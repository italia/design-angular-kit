import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-radio-index',
  templateUrl: './radio-index.component.html',
  styleUrls: ['./radio-index.component.scss'],
  standalone: false,
})
export class RadioIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItRadioButtonComponent');
  }
}
