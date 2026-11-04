import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-password-input-index',
  templateUrl: './password-input-index.component.html',
  standalone: false,
})
export class PasswordInputIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItPasswordInputComponent');
  }
}
