import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-navscroll-index',
  templateUrl: './navscroll-index.component.html',
  standalone: false,
})
export class NavscrollIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItNavscrollComponent');
  }
}
