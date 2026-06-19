import { Component } from '@angular/core';

@Component({
  selector: 'it-dropdown-nav-example',
  templateUrl: './dropdown-nav-example.component.html',
  standalone: false,
})
export class DropdownNavExampleComponent {
  items = [
    {
      link: '/home',
      active: false,
      disabled: false,
      text: 'Home',
    },
    {
      link: '/about',
      active: true,
      disabled: false,
      text: 'Chi siamo',
    },
    {
      link: '/contacts',
      active: false,
      disabled: true,
      text: 'Contatti',
    },
  ];
}
