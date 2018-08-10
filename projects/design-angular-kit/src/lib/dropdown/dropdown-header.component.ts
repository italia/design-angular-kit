import { Component } from '@angular/core';

let identifier = 0;

@Component({
  selector: 'it-dropdown-header',
  templateUrl: './dropdown-header.component.html',
  styleUrls: ['./dropdown-header.component.css']
})
export class DropdownHeaderComponent {
  id = `dropdown-header-${identifier++}`;
}
