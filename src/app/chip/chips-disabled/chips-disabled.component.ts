import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-chips-disabled',
  templateUrl: './chips-disabled.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ChipsDisabledComponent {
  el = {
    first: true,
  };

  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';

  close(value: keyof ChipsDisabledComponent['el']): void {
    this.el[value] = false;
  }
}
