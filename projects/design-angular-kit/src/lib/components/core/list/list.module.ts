import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

const listComponents = [
  ListComponent,
  ListItemComponent
];

@NgModule({
  imports: listComponents,
  exports: listComponents
})
export class ListModule {
}
