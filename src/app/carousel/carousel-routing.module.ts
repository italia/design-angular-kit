import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselIndexComponent } from './carousel-index/carousel-index.component';

const routes: Routes = [
  { path: '', component: CarouselIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselRoutingModule {
}
