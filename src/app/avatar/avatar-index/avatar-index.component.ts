import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-avatar-index',
  templateUrl: './avatar-index.component.html',
  styleUrls: ['./avatar-index.component.scss'],
  standalone: false,
})
export class AvatarIndexComponent {
  directive: any;
  dropdownItem: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find((directive: any) => directive.name === 'ItAvatarDirective');
    this.dropdownItem = (<any>Documentation).components.find((component: any) => component.name === 'ItAvatarDropDownItemComponent');
  }
}
