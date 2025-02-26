import { Component } from '@angular/core';
import { ButtonColor, ButtonSize } from 'design-angular-kit/interfaces/core';

@Component({
  selector: 'it-button-example-interactive',
  templateUrl: './button-example-interactive.component.html',
  styleUrls: ['./button-example-interactive.component.scss'],
  standalone: false,
})
export class ButtonExampleInteractiveComponent {
  disabled = false;

  outline = false;

  block = false;

  selectedColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  selectedSize?: ButtonSize;
  count = 0;

  get buttonColor(): ButtonColor | undefined {
    if (!this.selectedColor) {
      return undefined;
    }
    return this.outline ? `outline-${this.selectedColor}` : this.selectedColor;
  }

  increaseCount() {
    this.count++;
  }
}
