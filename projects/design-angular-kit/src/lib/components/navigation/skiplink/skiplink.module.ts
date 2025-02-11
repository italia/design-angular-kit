import { NgModule } from '@angular/core';
import { ItSkiplinkComponent } from './skiplink/skiplink.component';
import { ItSkiplinkItemComponent } from './skiplink-item/skiplink-item.component';

const skiplinkComponents = [ItSkiplinkComponent, ItSkiplinkItemComponent];

@NgModule({
  imports: skiplinkComponents,
  exports: skiplinkComponents,
})
export class ItSkiplinkModule {}
