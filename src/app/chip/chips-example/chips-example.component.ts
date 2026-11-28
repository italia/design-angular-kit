import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconName } from 'projects/design-angular-kit/src/public_api';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-chips-example',
  templateUrl: './chips-example.component.html',
  standalone: false,
})
export class ChipsExampleComponent {
  el = {
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true,
  };

  iconGithub: IconName = 'github';
  size: '' | 'lg' = 'lg';

  close(value: keyof typeof this.el): void {
    this.el[value] = false;
  }
}
