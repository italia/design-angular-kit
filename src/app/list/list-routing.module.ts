import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListIndexComponent } from './list-index/list-index.component';

const routes: Routes = [
  { path: '', component: ListIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
