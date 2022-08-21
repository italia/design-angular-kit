import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-tooltip-index',
  templateUrl: './tooltip-index.component.html',
  styleUrls: ['./tooltip-index.component.scss']
})
export class TooltipIndexComponent {

  directive: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find(directive => directive.name === 'ItTooltip');
  }

}
