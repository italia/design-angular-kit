import { Component } from '@angular/core';
import { IconColor, IconName, IconSize } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-forward-example',
  templateUrl: './forward-example.component.html',
  styles: [
    `
      .bd-content-title:before {
        content: '';
        display: block;
        height: 96px;
        margin: -96px 0 0;
      }
    `,
  ],
  standalone: false,
})
export class ForwardExampleComponent {
  icon: IconName = 'expand';
  color: IconColor = 'primary';
  size: IconSize = 'lg';
}
