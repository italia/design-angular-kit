import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingIndexComponent } from './rating-index/rating-index.component';

const routes: Routes = [{ path: '', component: RatingIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingRoutingModule {}
