import { Component } from '@angular/core';
import { FormControl } from '../../../../node_modules/@angular/forms';

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
      content: 'content1'
    },
    {
      label: 'tab2',
      content: 'content2'
    },
    {
      label: 'tab3',
      content: 'content3'
    }
  ];


  // Altro esempio

  secondtabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.secondtabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

}
