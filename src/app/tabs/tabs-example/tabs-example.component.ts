import { Component } from '@angular/core';

@Component({
  selector: 'it-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.scss']
})
export class TabsExampleComponent {

  isDarkTheme = false;

  isDisabled = false;

  isPill = false;

  tabs = [
    {
      label: 'tab1',
      content: 'content1',
      icon: 'it-file'
    },
    {
      label: 'tab2',
      content: 'content2',
      icon: 'it-calendar'
    },
    {
      label: 'tab3',
      content: 'content3',
      icon: 'it-comment'
    }
  ];
}
