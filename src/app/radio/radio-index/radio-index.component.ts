import { Component, OnInit } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-radio-index',
  templateUrl: './radio-index.component.html',
  styleUrls: ['./radio-index.component.scss']
})
export class RadioIndexComponent {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'RadioButtonComponent');
  }
}
