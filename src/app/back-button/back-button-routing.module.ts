import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackButtonIndexComponent } from './back-button-index/back-button-index.component';

const routes: Routes = [
  { path: '', component: BackButtonIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackButtonRoutingModule { }
