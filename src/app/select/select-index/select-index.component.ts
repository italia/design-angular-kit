import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-select-index',
  templateUrl: './select-index.component.html',
  styleUrls: ['./select-index.component.scss']
})
export class SelectIndexComponent {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'SelectComponent');
  }

}
