import { Component } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-disabled',
  templateUrl: './chips-disabled.component.html',
})
export class ChipsDisabledComponent {
  el = {
    first: true,
  };

  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';

  close(value: string): void {
    this.el[value] = false;
  }
}
