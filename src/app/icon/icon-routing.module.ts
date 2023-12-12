import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconIndexComponent } from './icon-index/icon-index.component';

const routes: Routes = [
  { path: '', component: IconIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconRoutingModule {
}
