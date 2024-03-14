import { Component } from '@angular/core';

@Component({
  selector: 'it-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss'],
})
export class ButtonExampleComponent {
  color = 'primary';
  disabled = false;
  isOutlined = false;
  size = 'lg';
  isBlock = false;
}
