import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeIndexComponent } from './badge-index/badge-index.component';

const routes: Routes = [{ path: '', component: BadgeIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeRoutingModule {}
