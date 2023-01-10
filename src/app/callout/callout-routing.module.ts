import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalloutIndexComponent } from './callout-index/callout-index.component';

const routes: Routes = [
  { path: '', component: CalloutIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalloutRoutingModule { }
