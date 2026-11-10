import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatioIndexComponent } from './ratio-index/ratio-index.component';

const routes: Routes = [{ path: '', component: RatioIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatioRoutingModule {}
