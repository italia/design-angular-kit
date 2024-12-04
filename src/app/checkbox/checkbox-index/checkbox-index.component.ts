import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-checkbox-index',
  templateUrl: './checkbox-index.component.html',
  styleUrls: ['./checkbox-index.component.scss'],
  standalone: false,
})
export class CheckboxIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItCheckboxComponent');
  }
}
