import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SteppersIndexComponent } from './steppers-index/steppers-index.component';

const routes: Routes = [{ path: '', component: SteppersIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SteppersRoutingModule {}
