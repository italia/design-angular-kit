import { Component, OnInit } from '@angular/core';
import { ICON_POSITIONS } from 'projects/design-angular-kit/src/lib/models/IconPosition';

@Component({
  selector: 'it-dropdown-example',
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.scss']
})
export class DropdownExampleComponent implements OnInit {
  color = '';
  label = 'Click me';
  isDark = false;
  isFullWidth = false;
  items = [
    {
      link: 'https://www.google.com', active: false,
      disabled: false, large: true,
      icon: 'it-favorite', iconPosition: 'right',
      text: 'Item 1'
    },
    {
      link: 'https://www.google.com', active: false,
      disabled: true, large: false,
      icon: 'it-facebook', iconPosition: 'right',
      text: 'Item 2'
    },
    {
      link: 'https://www.google.com', active: true,
      disabled: false, large: true,
      icon: 'it-twitter', iconPosition: 'right',
      text: 'Item 3'
    },
  ];

  openTime = '';
  closeTime = '';
  toggleTime = '';

  constructor() { }

  ngOnInit() {
  }

  onOpenEvent() {
    this.openTime = (new Date()).toISOString();
  }

  onCloseEvent() {
    this.closeTime = (new Date()).toISOString();
  }

  onToggleEvent() {
    this.toggleTime = (new Date()).toISOString();
  }

}
