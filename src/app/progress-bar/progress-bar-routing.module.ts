import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgressBarIndexComponent } from './progress-bar-index/progress-bar-index.component';

const routes: Routes = [
  { path: '', component: ProgressBarIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressBarRoutingModule { }
