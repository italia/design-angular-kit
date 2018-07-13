import { Component, OnInit } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-popover-index',
  templateUrl: './popover-index.component.html',
  styleUrls: ['./popover-index.component.scss']
})
export class PopoverIndexComponent implements OnInit {

  directive: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find(directive => directive.name === 'PopoverDirective');
  }

  ngOnInit() {
  }

}
