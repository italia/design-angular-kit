import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalIndexComponent } from './modal-index/modal-index.component';

const routes: Routes = [
  { path: '', component: ModalIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalRoutingModule {
}
