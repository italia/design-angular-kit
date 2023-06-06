import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

const carouselComponents = [
  CarouselComponent,
  CarouselItemComponent
];

@NgModule({
  imports: carouselComponents,
  exports: carouselComponents
})
export class CarouselModule {
}
