import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-breadcrumb-index',
  templateUrl: './breadcrumb-index.component.html',
  styleUrls: ['./breadcrumb-index.component.scss'],
  standalone: false,
})
export class BreadcrumbIndexComponent {
  component: any;
  subcomponent: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItBreadcrumbComponent');
    this.subcomponent = (<any>Documentation).components.find(component => component.name === 'ItBreadcrumbItemComponent');
  }
}
