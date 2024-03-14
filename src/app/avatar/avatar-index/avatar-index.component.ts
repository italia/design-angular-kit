import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-avatar-index',
  templateUrl: './avatar-index.component.html',
  styleUrls: ['./avatar-index.component.scss'],
})
export class AvatarIndexComponent {
  directive: any;
  dropdownItem: any;

  constructor() {
    this.directive = (<any>Documentation).directives.find(directive => directive.name === 'ItAvatarDirective');
    this.dropdownItem = (<any>Documentation).components.find(component => component.name === 'ItAvatarDropDownItemComponent');
  }
}
