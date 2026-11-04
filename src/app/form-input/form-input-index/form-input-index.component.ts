import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-form-input-index',
  templateUrl: './form-input-index.component.html',
  styleUrls: ['./form-input-index.component.scss'],
  standalone: false,
})
export class FormInputIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItInputComponent');
  }
}
