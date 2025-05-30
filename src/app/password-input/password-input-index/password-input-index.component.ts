import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-password-input-index',
  templateUrl: './password-input-index.component.html',
  standalone: false,
})
export class PasswordInputIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItPasswordInputComponent');
  }
}
