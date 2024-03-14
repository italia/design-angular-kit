import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardIndexComponent } from './card-index/card-index.component';

const routes: Routes = [{ path: '', component: CardIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
