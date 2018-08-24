import { Component } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-form-input-index',
  templateUrl: './form-input-index.component.html',
  styleUrls: ['./form-input-index.component.scss']
})
export class FormInputIndexComponent {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'FormInputComponent');
  }

}
