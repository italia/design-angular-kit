import { NgModule } from '@angular/core';
import { ItListComponent } from './list/list.component';
import { ItListItemComponent } from './list-item/list-item.component';

const listComponents = [ItListComponent, ItListItemComponent];

@NgModule({
  imports: listComponents,
  exports: listComponents,
})
export class ItListModule {}
