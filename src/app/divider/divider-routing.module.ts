import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DividerIndexComponent } from './divider-index/divider-index.component';

const routes: Routes = [{ path: '', component: DividerIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DividerRoutingModule {}
