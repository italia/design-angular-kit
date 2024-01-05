import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TableRoutingModule } from './table-routing.module';
import { TableIndexComponent } from './table-index/table-index.component';
import { TableExamplesComponent } from './table-examples/table-examples.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { FormsModule } from '@angular/forms';
import { TableStripedExampleComponent } from './table-striped-example/table-striped-example.component';
import { TableHoverExampleComponent } from './table-hover-example/table-hover-example.component';
import { TableBorderedExampleComponent } from './table-bordered-example/table-bordered-example.component';
import { TableBorderlessExampleComponent } from './table-borderless-example/table-borderless-example.component';
import { TableCompactExampleComponent } from './table-compact-example/table-compact-example.component';
import { TableAlignmentExampleComponent } from './table-alignment-example/table-alignment-example.component';
import { TableHeaderExampleComponent } from './table-header-example/table-header-example.component';
import { TableFooterExampleComponent } from './table-footer-example/table-footer-example.component';
import { TableCaptionExampleComponent } from './table-caption-example/table-caption-example.component';
import { SortDirective } from 'projects/design-angular-kit/src/lib/components/core/table/sort/sort.directive';
import { SortHeaderComponent } from 'projects/design-angular-kit/src/lib/components/core/table/sort/sort-header/sort-header.component';



@NgModule({
  declarations: [
    TableIndexComponent,
    TableExamplesComponent,
    TableExampleComponent,
    TableStripedExampleComponent,
    TableHoverExampleComponent,
    TableBorderedExampleComponent,
    TableBorderlessExampleComponent,
    TableCompactExampleComponent,
    TableAlignmentExampleComponent,
    TableHeaderExampleComponent,
    TableFooterExampleComponent,
    TableCaptionExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableRoutingModule,
    FormsModule,
    SortDirective,
    SortHeaderComponent
  ]
})
export class TableModule { }
