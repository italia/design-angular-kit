import { NgModule } from '@angular/core';
import { ItCarouselComponent } from './carousel/carousel.component';
import { ItCarouselItemComponent } from './carousel-item/carousel-item.component';

const carouselComponents = [ItCarouselComponent, ItCarouselItemComponent];

@NgModule({
  imports: carouselComponents,
  exports: carouselComponents,
})
export class ItCarouselModule {}
