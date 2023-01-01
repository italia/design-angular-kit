import { Component } from '@angular/core';
import { ButtonColor, ButtonSize } from '../../../../projects/design-angular-kit/src/lib/interfaces/core';


@Component({
  selector: 'it-button-example-interactive',
  templateUrl: './button-example-interactive.component.html',
  styleUrls: ['./button-example-interactive.component.scss']
})
export class ButtonExampleInteractiveComponent {

  disabled = false;

  outline = false;

  block = false;

  selectedColor?: 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'info'
    | 'warning' = 'primary';
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
