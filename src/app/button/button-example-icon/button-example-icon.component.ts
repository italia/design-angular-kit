import { Component } from '@angular/core';
import { IconColor, IconName } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-button-example-icon',
  templateUrl: './button-example-icon.component.html',
  styleUrls: ['./button-example-icon.component.scss']
})
export class ButtonExampleIconComponent {

  block = false;
  outline = false;
  disabled = false;
  selectedColor = '';
  selectedSize = '';
  count = 0;


  icon: IconName = 'user';
  iconColor: IconColor = 'white';
  iconPosition: 'start' | 'end' = 'start';
  iconRounded: boolean = true;
  iconRoundedColor: IconColor = 'white';

  increaseCount() {
    this.count++;
  }

}
