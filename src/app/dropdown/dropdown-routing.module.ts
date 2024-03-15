import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownIndexComponent } from './dropdown-index/dropdown-index.component';

const routes: Routes = [{ path: '', component: DropdownIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DropdownRoutingModule {}
