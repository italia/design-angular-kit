import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-breadcrumb-index',
  templateUrl: './breadcrumb-index.component.html',
  styleUrls: ['./breadcrumb-index.component.scss'],
  standalone: false,
})
export class BreadcrumbIndexComponent {
  component: any;
  subcomponent: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItBreadcrumbComponent');
    this.subcomponent = (<any>Documentation).components.find((component: any) => component.name === 'ItBreadcrumbItemComponent');
  }
}
