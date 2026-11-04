import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-dropdown-index',
  templateUrl: './dropdown-index.component.html',
  styleUrls: ['./dropdown-index.component.scss'],
  standalone: false,
})
export class DropdownIndexComponent {
  component: any;
  subcomponent: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItDropdownComponent');
    this.subcomponent = (<any>Documentation).components.find((component: any) => component.name === 'ItDropdownItemComponent');
  }
}
