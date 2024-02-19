import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-sidebar-index',
  templateUrl: './sidebar-index.component.html',
})
export class SidebarIndexComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected sidebarComponent: any;

  constructor() {
    this.sidebarComponent = Documentation.components.find(component => component.name === 'ItSidebarComponent');
  }
}
