import { Component } from '@angular/core';
const { version: appVersion } = require('../../package.json');
import TableOfContent from '../assets/table-of-content.json';

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
