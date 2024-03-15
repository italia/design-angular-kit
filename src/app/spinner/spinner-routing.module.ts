import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinnerIndexComponent } from './spinner-index/spinner-index.component';

const routes: Routes = [{ path: '', component: SpinnerIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpinnerRoutingModule {}
