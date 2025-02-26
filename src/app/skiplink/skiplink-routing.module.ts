import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkiplinkIndexComponent } from './skiplink-index/skiplink-index.component';

const routes: Routes = [{ path: '', component: SkiplinkIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkiplinkRoutingModule {}
