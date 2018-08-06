import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonIndexComponent } from './button-index/button-index.component';

const routes: Routes = [
  { path: '', component: ButtonIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRoutingModule { }
