import { Component, ChangeDetectionStrategy } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-tabs-index',
  templateUrl: './tabs-index.component.html',
  styleUrls: ['./tabs-index.component.scss'],
  standalone: false,
})
export class TabsIndexComponent {
  tabGroupComponent: any;
  tabComponent: any;

  constructor() {
    this.tabGroupComponent = (<any>Documentation).components.find((component: any) => component.name === 'ItTabContainerComponent');
    this.tabComponent = (<any>Documentation).components.find((component: any) => component.name === 'ItTabItemComponent');
  }
}
