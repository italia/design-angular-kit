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
    'success',
    'light',
    'dark'
  ];

  selectedColor = 'primary';
  badgeText = 'New';

  isPill = false;
}
