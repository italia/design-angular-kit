import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-divider-index',
  templateUrl: './divider-index.component.html',
  standalone: false,
})
export class DividerIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((c: any) => c.name === 'ItDividerComponent');
  }
}
