import { Component } from '@angular/core';

@Component({
  selector: 'it-tabs-dynamic-example',
  templateUrl: './tabs-dynamic-example.component.html',
  styleUrls: ['./tabs-dynamic-example.component.scss'],
  standalone: false,
})
export class TabsDynamicExampleComponent {
  tabs = ['Primo', 'Secondo', 'Terzo'];
  selectedIndex = 0;
  selectAfterAdding = false;

  addTab() {
    this.tabs.push('Nuovo');

    if (this.selectAfterAdding) {
      this.selectedIndex = this.tabs.length - 1;
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
