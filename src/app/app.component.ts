import { Component } from '@angular/core';
const { version: appVersion } = require('../../package.json');

@Component({
  selector: 'it-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  title = 'design-angular-kit-doc';
  version = appVersion;
}
