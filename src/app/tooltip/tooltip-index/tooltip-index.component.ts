import { Component, OnInit } from '@angular/core';
import * as Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-tooltip-index',
  templateUrl: './tooltip-index.component.html',
  styleUrls: ['./tooltip-index.component.scss']
})
export class TooltipIndexComponent implements OnInit {

  directive: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find(directive => directive.name === 'TooltipDirective');
  }

  ngOnInit() {
  }

}
