import { Component } from '@angular/core';

@Component({
  selector: 'it-button-example-icon',
  templateUrl: './button-example-icon.component.html',
  styleUrls: ['./button-example-icon.component.scss']
})
export class ButtonExampleIconComponent {
  color = 'primary';
  disabled = false;
  isOutlined = false;
  size = 'lg';
  isBlock = false;
}
