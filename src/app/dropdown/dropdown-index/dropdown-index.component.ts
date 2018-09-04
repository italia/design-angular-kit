import { Component, OnInit } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-dropdown-index',
  templateUrl: './dropdown-index.component.html',
  styleUrls: ['./dropdown-index.component.scss']
})
export class DropdownIndexComponent implements OnInit {

  component: any;
  subcomponent: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'DropdownComponent');
    this.subcomponent = (<any>Documentation).components.find(component => component.name === 'DropdownItemComponent');
  }

  ngOnInit() {
  }

}
