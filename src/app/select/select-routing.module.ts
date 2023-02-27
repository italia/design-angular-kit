import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectIndexComponent } from './select-index/select-index.component';

const routes: Routes = [
  { path: '', component: SelectIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectRoutingModule { }
