import { Component, OnInit } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-button-index',
  templateUrl: './button-index.component.html',
  styleUrls: ['./button-index.component.scss']
})
export class ButtonIndexComponent implements OnInit {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ButtonComponent');
  }

  ngOnInit() {
  }

}
