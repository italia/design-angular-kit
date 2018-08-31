import { Component } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-collapse-index',
  templateUrl: './collapse-index.component.html',
  styleUrls: ['./collapse-index.component.scss']
})
export class CollapseIndexComponent {

  directive: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find(directive => directive.name === 'CollapseDirective');
  }
}
