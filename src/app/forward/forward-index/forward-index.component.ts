import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-forward-index',
  templateUrl: './forward-index.component.html',
  standalone: false,
})
export class ForwardIndexComponent {
  directive: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find(directive => directive.name === 'ItForwardDirective');
  }
}
