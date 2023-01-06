import { Component } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-example',
  templateUrl: './chips-example.component.html'
})
export class ChipsExampleComponent {

  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';

}
