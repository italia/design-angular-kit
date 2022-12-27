import { Component } from '@angular/core';
import { IconColorEnum } from 'projects/design-angular-kit/src/lib/old_components/enums/icons.enum';

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


  icon: string = 'it-user';
  iconColor: IconColorEnum = IconColorEnum.primary;
  iconPosition: 'start' | 'end' = 'start';
  iconRounded: boolean = true;
  iconRoundedColor: IconColorEnum = IconColorEnum.white;

  increaseCount() {
    this.count++;
  }

}
