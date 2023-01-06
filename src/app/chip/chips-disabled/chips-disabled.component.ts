import { Component } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-disabled',
  templateUrl: './chips-disabled.component.html'
})
export class ChipsDisabledComponent {

  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';

}
