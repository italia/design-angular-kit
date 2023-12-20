import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackToTopIndexComponent } from './back-to-top-index/back-to-top-index.component';

const routes: Routes = [
  { path: '', component: BackToTopIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackToTopRoutingModule { }
