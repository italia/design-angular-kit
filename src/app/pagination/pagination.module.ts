import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginationIndexComponent } from './pagination-index/pagination-index.component';
import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationExamplesComponent } from './pagination-examples/pagination-examples.component';
import { PaginationExampleComponent } from './pagination-example/pagination-example.component';
import { PaginationChangerExampleComponent } from './pagination-changer-example/pagination-changer-example.component';
import { PaginationJumpExampleComponent } from './pagination-jump-example/pagination-jump-example.component';
import { PaginationSimpleExampleComponent } from './pagination-simple-example/pagination-simple-example.component';
import { PaginationTextLinksExampleComponent } from './pagination-text-links-example/pagination-text-links-example.component';
import { PaginationTotalNumberExampleComponent } from './pagination-total-number-example/pagination-total-number-example.component';

@NgModule({
  declarations: [
    PaginationIndexComponent,
    PaginationExamplesComponent,
    PaginationExampleComponent,
    PaginationChangerExampleComponent,
    PaginationJumpExampleComponent,
    PaginationSimpleExampleComponent,
    PaginationTextLinksExampleComponent,
    PaginationTotalNumberExampleComponent,
  ],
  imports: [CommonModule, SharedModule, PaginationRoutingModule],
})
export class PaginationModule {}
