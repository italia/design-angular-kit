import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-go-to-top-index',
  templateUrl: './back-to-top-index.component.html',
  standalone: false,
})
export class BackToTopIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItBackToTopComponent');
  }
}
