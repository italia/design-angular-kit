import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopoverIndexComponent } from './popover-index/popover-index.component';

const routes: Routes = [{ path: '', component: PopoverIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverRoutingModule {}
