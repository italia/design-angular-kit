import { NgModule } from '@angular/core';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabItemComponent } from './tab-item/tab-item.component';

const tabComponents = [
  TabContainerComponent,
  TabItemComponent
];

@NgModule({
  imports: tabComponents,
  exports: tabComponents
})
export class TabModule {
}
