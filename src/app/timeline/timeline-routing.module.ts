import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineIndexComponent } from './timeline-index/timeline-index.component';

const routes: Routes = [{ path: '', component: TimelineIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelineRoutingModule {}
