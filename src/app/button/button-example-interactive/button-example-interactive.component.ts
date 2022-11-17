import { Component } from '@angular/core';
import { IconColorEnum } from 'projects/design-angular-kit/src/lib/enums/icons.enum';

@Component({
  selector: 'it-button-example-interactive',
  templateUrl: './button-example-interactive.component.html',
  styleUrls: ['./button-example-interactive.component.scss']
})
export class ButtonExampleInteractiveComponent {

  block = false;
  outline = false;
  disabled = false;
  selectedColor = '';
  selectedSize = '';
  count = 0;


  icon: string = 'it-user';
  iconColor: IconColorEnum = IconColorEnum.primary;
  iconPosition: 'start' | 'end' = 'start';
  iconRounded: boolean = true;
  iconRoundedColor: IconColorEnum = IconColorEnum.white;

  increaseCount() {
    this.count++;
  }

}
