import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForwardIndexComponent } from './forward-index/forward-index.component';

const routes: Routes = [
  { path: '', component: ForwardIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForwardRoutingModule { }
