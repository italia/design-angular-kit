import { Component } from '@angular/core';
import TableOfContent from '../assets/table-of-content.json';
// eslint-disable-next-line
const { version: appVersion } = require('../../package.json');

@Component({
  selector: 'it-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  tableOfContent = (<any>TableOfContent).tableOfContent;
  title = 'design-angular-kit-doc';
  version = appVersion;
}
