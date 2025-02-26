import { Component } from '@angular/core';

@Component({
  selector: 'it-dropdown-link-example',
  templateUrl: './dropdown-link-example.component.html',
  standalone: false,
})
export class DropdownLinkExampleComponent {
  items = [
    {
      link: 'https://www.google.com',
      active: false,
      disabled: false,
      large: true,
      icon: 'star-outline',
      iconPosition: 'right',
      text: 'Item 1',
    },
    {
      link: 'https://www.google.com',
      active: false,
      disabled: true,
      large: false,
      icon: 'link',
      iconPosition: 'right',
      text: 'Item 2',
    },
    {
      link: 'https://www.google.com',
      active: true,
      disabled: false,
      large: true,
      icon: undefined,
      iconPosition: 'right',
      text: 'Item 3',
    },
  ];

  openTime = '';
  closeTime = '';

  onOpenEvent() {
    this.openTime = new Date().toISOString();
  }

  onCloseEvent() {
    this.closeTime = new Date().toISOString();
  }
}
