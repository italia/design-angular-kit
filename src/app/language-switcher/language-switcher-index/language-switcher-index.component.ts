import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-language-switcher-index',
  templateUrl: './language-switcher-index.component.html',
  standalone: false,
})
export class LanguageSwitcherIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find((component: any) => component.name === 'ItLanguageSwitcherComponent');
  }
}
