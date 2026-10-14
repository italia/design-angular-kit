import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-megamenu-index',
  templateUrl: './megamenu-index.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class MegamenuIndexComponent {
  component: any;

  constructor() {
    this.component = Documentation.components.find(component => component.name === 'ItMegamenuComponent');
  }
}
