import { Component, ChangeDetectionStrategy } from '@angular/core';
import TableOfContent from '../assets/table-of-content.json';
import { version as appVersion } from '../../package.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
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
