import { Component } from '@angular/core';

@Component({
  selector: 'it-badge-example',
  templateUrl: './badge-example.component.html',
  styleUrls: ['./badge-example.component.scss']
})
export class BadgeExampleComponent {
  colors = [
    'primary',
    'secondary',
    'danger',
    'warning',
    'info',
    'success',
    'light',
    'dark'
  ];

  badgeText = 'New';

  isPill = false;
}
