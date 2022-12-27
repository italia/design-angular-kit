import { Component } from '@angular/core';
import { BadgeColor } from '../../../../projects/design-angular-kit/src/lib/interfaces/core';

@Component({
  selector: 'it-badge-example',
  templateUrl: './badge-example.component.html',
  styleUrls: ['./badge-example.component.scss']
})
export class BadgeExampleComponent {
  colors: Array<BadgeColor> = [
    'primary',
    'secondary',
    'danger',
    'warning',
    'success'
  ];

  selectedColor: BadgeColor = 'primary';
  badgeText = 'New';

  isRounded = false;
}
