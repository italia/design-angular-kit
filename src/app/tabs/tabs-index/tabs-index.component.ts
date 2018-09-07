import { Component, OnInit } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-tabs-index',
  templateUrl: './tabs-index.component.html',
  styleUrls: ['./tabs-index.component.scss']
})
export class TabsIndexComponent {

  tabGroupComponent: any;
  tabComponent: any;

  constructor() {
    this.tabGroupComponent = (<any>Documentation).components.find(component => component.name === 'TabGroupComponent');
    this.tabComponent = (<any>Documentation).components.find(component => component.name === 'TabComponent');
  }

}
