import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbIndexComponent } from './breadcrumb-index/breadcrumb-index.component';

const routes: Routes = [{ path: '', component: BreadcrumbIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbRoutingModule {}
