import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarIndexComponent } from './sidebar-index/sidebar-index.component';

const routes: Routes = [{ path: '', component: SidebarIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarRoutingModule {}
