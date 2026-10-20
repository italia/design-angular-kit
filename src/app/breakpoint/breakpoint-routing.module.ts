import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakpointIndexComponent } from './breakpoint-index/breakpoint-index.component';

const routes: Routes = [{ path: '', component: BreakpointIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakpointRoutingModule {}
