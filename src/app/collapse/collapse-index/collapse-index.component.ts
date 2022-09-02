import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

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
    this.directive = (<any>Documentation).directives.find(directive => directive.name === 'ItCollapseDirective');
    this.groupComponent = (<any>Documentation).components.find(component => component.name === 'ItCollapseGroupComponent');
    this.itemComponent = (<any>Documentation).components.find(component => component.name === 'ItCollapseItemComponent');
  }
}
