import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChipIndexComponent } from './chip-index/chip-index.component';

const routes: Routes = [{ path: '', component: ChipIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChipRoutingModule {}
