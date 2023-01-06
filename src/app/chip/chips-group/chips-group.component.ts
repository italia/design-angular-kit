import { Component } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-group',
  templateUrl: './chips-group.component.html'
})
export class ChipsGroupComponent {

  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';

}
