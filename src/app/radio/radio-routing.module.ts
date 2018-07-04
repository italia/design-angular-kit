import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadioIndexComponent } from './radio-index/radio-index.component';

const routes: Routes = [
  { path: '', component: RadioIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioRoutingModule { }
