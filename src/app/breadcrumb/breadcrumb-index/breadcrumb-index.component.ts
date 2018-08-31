import { Component, OnInit } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-breadcrumb-index',
  templateUrl: './breadcrumb-index.component.html',
  styleUrls: ['./breadcrumb-index.component.scss']
})
export class BreadcrumbIndexComponent {

  component: any;
  subcomponent: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'BreadcrumbComponent');
    this.subcomponent = (<any>Documentation).components.find(component => component.name === 'BreadcrumbItemComponent');
  }

}
