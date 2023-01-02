import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DimmerIndexComponent } from './dimmer-index/dimmer-index.component';

const routes: Routes = [
  { path: '', component: DimmerIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DimmerRoutingModule { }
