import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxIndexComponent } from './checkbox-index/checkbox-index.component';

const routes: Routes = [
  { path: '', component: CheckboxIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckboxRoutingModule { }
