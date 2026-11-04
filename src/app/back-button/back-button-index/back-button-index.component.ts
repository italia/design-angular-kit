import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-go-back-index',
  templateUrl: './back-button-index.component.html',
  standalone: false,
})
export class BackButtonIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItBackButtonComponent');
  }
}
