import { Component } from '@angular/core';
import { ButtonColor, DropdownDirection } from '../../../../projects/design-angular-kit/src/lib/interfaces/core';

@Component({
  selector: 'it-dropdown-example',
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.scss']
})
export class DropdownExampleComponent {
  color?: ButtonColor;
  label = 'Click me';
  isDark = false;
  isFullWidth = false;
  withHeading = true;

  menuPlacement?: DropdownDirection;

  items = [
    {
      link: 'https://www.google.com', active: false,
      disabled: false, large: true,
      icon: 'it-star-outline', iconPosition: 'right',
      text: 'Item 1'
    },
    {
      link: 'https://www.google.com', active: false,
      disabled: true, large: false,
      icon: 'it-link', iconPosition: 'right',
      text: 'Item 2'
    },
    {
      link: 'https://www.google.com', active: true,
      disabled: false, large: true,
      icon: undefined, iconPosition: 'right',
      text: 'Item 3'
    },
  ];

  openTime = '';
  closeTime = '';

  onOpenEvent() {
    this.openTime = (new Date()).toISOString();
  }

  onCloseEvent() {
    this.closeTime = (new Date()).toISOString();
  }

}
