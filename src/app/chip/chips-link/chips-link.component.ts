import { Component } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-link',
  templateUrl: './chips-link.component.html',
  standalone: false,
})
export class ChipsLinkComponent {
  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';
}
