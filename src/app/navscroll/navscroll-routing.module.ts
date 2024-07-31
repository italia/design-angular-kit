import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavscrollIndexComponent } from './navscroll-index/navscroll-index.component';

export const ROUTES = [{ path: '', component: NavscrollIndexComponent }] satisfies Routes;

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class NavscrollRoutingModule {}
