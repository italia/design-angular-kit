import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertIndexComponent } from './alert-index/alert-index.component';

const routes: Routes = [{ path: '', component: AlertIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertRoutingModule {}
