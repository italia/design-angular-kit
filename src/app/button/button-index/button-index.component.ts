import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-button-index',
  templateUrl: './button-index.component.html',
  styleUrls: ['./button-index.component.scss'],
})
export class ButtonIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).directives.find(directive => directive.name === 'ItButtonDirective');
  }
}
