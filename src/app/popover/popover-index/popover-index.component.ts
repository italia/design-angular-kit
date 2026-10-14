import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-popover-index',
  templateUrl: './popover-index.component.html',
  styleUrls: ['./popover-index.component.scss'],
  standalone: false,
})
export class PopoverIndexComponent {
  directive: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find((directive: any) => directive.name === 'ItPopoverDirective');
  }
}
