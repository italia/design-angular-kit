import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollapseIndexComponent } from './collapse-index/collapse-index.component';

const routes: Routes = [
  { path: '', component: CollapseIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollapseRoutingModule { }
