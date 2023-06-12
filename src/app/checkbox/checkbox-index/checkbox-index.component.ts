import { Component, OnInit } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-checkbox-index',
  templateUrl: './checkbox-index.component.html',
  styleUrls: ['./checkbox-index.component.scss']
})
export class CheckboxIndexComponent {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItCheckboxComponent');
  }

}
