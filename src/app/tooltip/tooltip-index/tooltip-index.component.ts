import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-tooltip-index',
  templateUrl: './tooltip-index.component.html',
  styleUrls: ['./tooltip-index.component.scss'],
  standalone: false,
})
export class TooltipIndexComponent {
  directive: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find((directive: any) => directive.name === 'ItTooltipDirective');
  }
}
