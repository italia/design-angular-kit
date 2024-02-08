import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MegamenuIndexComponent } from './megamenu-index/megamenu-index.component';

const routes: Routes = [{ path: '', component: MegamenuIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MegamenuRoutingModule {}
