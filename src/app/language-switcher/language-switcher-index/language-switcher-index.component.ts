import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-language-switcher-index',
  templateUrl: './language-switcher-index.component.html',
  standalone: false,
})
export class LanguageSwitcherIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItLanguageSwitcherComponent');
  }
}
