import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'it-tabs-dynamic-example',
  templateUrl: './tabs-dynamic-example.component.html',
  styleUrls: ['./tabs-dynamic-example.component.scss']
})
export class TabsDynamicExampleComponent {

  tabs = ['Primo', 'Secondo', 'Terzo'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('Nuovo');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
