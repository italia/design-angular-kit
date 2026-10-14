import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-forward-index',
  templateUrl: './forward-index.component.html',
  standalone: false,
})
export class ForwardIndexComponent {
  directive: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find((directive: any) => directive.name === 'ItForwardDirective');
  }
}
