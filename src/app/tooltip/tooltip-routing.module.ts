import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipIndexComponent } from './tooltip-index/tooltip-index.component';

const routes: Routes = [
  { path: '', component: TooltipIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TooltipRoutingModule { }
