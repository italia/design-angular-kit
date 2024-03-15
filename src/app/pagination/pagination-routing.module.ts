import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationIndexComponent } from './pagination-index/pagination-index.component';

const routes: Routes = [{ path: '', component: PaginationIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginationRoutingModule {}
