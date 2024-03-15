import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RangeIndexComponent } from './range-index/range-index.component';

const routes: Routes = [{ path: '', component: RangeIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeRoutingModule {}
