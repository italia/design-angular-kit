import { Component } from '@angular/core';
import { IconName } from 'design-angular-kit/interfaces/icon';

@Component({
  selector: 'it-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.scss'],
})
export class TabsExampleComponent {
  isDarkTheme = false;

  isDisabled = false;

  isCard = false;

  isVertical = false;

  isInverted = false;

  tabs: Array<{
    label: string;
    content: string;
    icon: IconName;
  }> = [
    {
      label: 'tab1',
      content: 'content1',
      icon: 'file',
    },
    {
      label: 'tab2',
      content: 'content2',
      icon: 'calendar',
    },
    {
      label: 'tab3',
      content: 'content3',
      icon: 'comment',
    },
  ];
}
