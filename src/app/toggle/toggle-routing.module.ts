import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToggleIndexComponent } from './toggle-index/toggle-index.component';

const routes: Routes = [{ path: '', component: ToggleIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleRoutingModule {}
