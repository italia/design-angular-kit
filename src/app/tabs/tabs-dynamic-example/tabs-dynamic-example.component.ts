import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'it-tabs-dynamic-example',
  templateUrl: './tabs-dynamic-example.component.html',
  styleUrls: ['./tabs-dynamic-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TabsDynamicExampleComponent {
  tabs = ['Primo', 'Secondo', 'Terzo'];

  addTab() {
    this.tabs.push('Nuovo');
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
