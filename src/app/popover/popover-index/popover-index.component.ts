import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-popover-index',
  templateUrl: './popover-index.component.html',
  styleUrls: ['./popover-index.component.scss']
})
export class PopoverIndexComponent {

  directive: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find(directive => directive.name === 'ItPopover');
  }

}
