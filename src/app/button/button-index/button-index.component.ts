import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-button-index',
  templateUrl: './button-index.component.html',
  styleUrls: ['./button-index.component.scss'],
  standalone: false,
})
export class ButtonIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).directives.find((directive: any) => directive.name === 'ItButtonDirective');
  }
}
