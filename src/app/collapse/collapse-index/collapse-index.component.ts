import { Component } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-collapse-index',
  templateUrl: './collapse-index.component.html',
  styleUrls: ['./collapse-index.component.scss']
})
export class CollapseIndexComponent {

  directive: any;
  groupComponent: any;
  itemComponent: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find(directive => directive.name === 'CollapseDirective');
    this.groupComponent = (<any>Documentation).components.find(component => component.name === 'CollapseGroupComponent');
    this.itemComponent = (<any>Documentation).components.find(component => component.name === 'CollapseItemComponent');
  }
}
