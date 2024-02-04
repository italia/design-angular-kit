import { NgModule } from '@angular/core';
import { ItTableComponent } from './table.component';
import { ItSortDirective } from './sort/sort.directive';
import { ItSortHeaderComponent } from './sort/sort-header/sort-header.component';

const tableComponents = [ItTableComponent, ItSortDirective, ItSortHeaderComponent];

@NgModule({
  imports: tableComponents,
  exports: tableComponents,
})
export class ItTableModule {}
