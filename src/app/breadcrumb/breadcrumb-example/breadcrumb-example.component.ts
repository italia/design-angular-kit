import { Component } from '@angular/core';
import { IconName } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-breadcrumb-example',
  templateUrl: './breadcrumb-example.component.html',
  styleUrls: ['./breadcrumb-example.component.scss'],
  standalone: false,
})
export class BreadcrumbExampleComponent {
  get icon(): IconName {
    return this._icon;
  }
  set icon(value: IconName) {
    this._icon = value;
    this.items.forEach(item => (item.icon = this._icon));
  }
  private _icon: IconName = 'star-outline';

  separator = '/';
  isDark = false;
  items = [
    { link: 'https://www.aol.com', label: 'Crumb 1', icon: this.icon, active: false },
    { link: 'https://www.yahoo.com', label: 'Crumb 2', icon: this.icon, active: false },
    { link: 'https://www.bing.com', label: 'Crumb 3', icon: this.icon, active: true },
  ];

  i = 4;

  insert() {
    for (const item of this.items) {
      item.active = false;
    }
    this.items.push({ link: `https://www.google.com`, label: `Crumb ${this.i}`, icon: this.icon, active: true });
    this.i++;
  }

  remove() {
    if (this.items.length) {
      this.items.pop();
      this.i--;
    }
  }

  change() {
    this.separator = this.separator === '/' ? '>' : '/';
    this.items.forEach(item => {
      item.icon = item.icon === 'star-outline' ? 'locked' : 'star-outline';
    });
  }

  toggle() {
    this.isDark = !this.isDark;
  }
}
