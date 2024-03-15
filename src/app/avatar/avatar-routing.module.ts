import { AvatarIndexComponent } from './avatar-index/avatar-index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: AvatarIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarRoutingModule {}
