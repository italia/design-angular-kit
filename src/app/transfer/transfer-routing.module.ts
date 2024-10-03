import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferIndexComponent } from './transfer-index/transfer-index.component';

const routes = [
  {
    path: '',
    component: TransferIndexComponent,
  },
] satisfies Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferRoutingModule {}
