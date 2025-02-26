import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-toggle-index',
  templateUrl: './toggle-index.component.html',
  styleUrls: ['./toggle-index.component.scss'],
  standalone: false,
})
export class ToggleIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItCheckboxComponent');
  }
}
