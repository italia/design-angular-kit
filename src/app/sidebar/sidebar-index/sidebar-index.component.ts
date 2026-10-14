import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-sidebar-index',
  templateUrl: './sidebar-index.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SidebarIndexComponent {
  protected sidebarComponent: any;

  constructor() {
    this.sidebarComponent = Documentation.components.find(component => component.name === 'ItSidebarComponent');
  }
}
