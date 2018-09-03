import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsIndexComponent } from './tabs-index/tabs-index.component';

const routes: Routes = [
  { path: '', component: TabsIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
