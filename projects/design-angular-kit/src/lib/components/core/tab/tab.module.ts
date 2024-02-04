import { NgModule } from '@angular/core';
import { ItTabContainerComponent } from './tab-container/tab-container.component';
import { ItTabItemComponent } from './tab-item/tab-item.component';

const tabComponents = [ItTabContainerComponent, ItTabItemComponent];

@NgModule({
  imports: tabComponents,
  exports: tabComponents,
})
export class ItTabModule {}
