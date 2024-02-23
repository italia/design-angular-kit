import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderIndexComponent } from './header-index/header-index.component';

const routes: Routes = [{ path: '', component: HeaderIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
