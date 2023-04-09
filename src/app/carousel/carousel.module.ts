import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselIndexComponent } from './carousel-index/carousel-index.component';
import { CarouselExamplesComponent } from './carousel-examples/carousel-examples.component';
import { CarouselExampleComponent } from './carousel-example/carousel-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselArticleExampleComponent } from './carousel-article-example/carousel-article-example.component';
import { CarouselFeaturedImageExampleComponent } from './carousel-featured-image-example/carousel-featured-image-example.component';
import { CarouselImageAboveExampleComponent } from './carousel-image-above-example/carousel-image-above-example.component';
import { CarouselSpecialCardsExampleComponent } from './carousel-special-cards-example/carousel-special-cards-example.component';
import { CarouselFullscreenImageExampleComponent } from './carousel-fullscreen-image-example/carousel-fullscreen-image-example.component';
import { CarouselFullscreenImageStandardExampleComponent } from './carousel-fullscreen-image-standard-example/carousel-fullscreen-image-standard-example.component';



@NgModule({
  declarations: [
    CarouselIndexComponent,
    CarouselExamplesComponent,
    CarouselExampleComponent,
    CarouselArticleExampleComponent,
    CarouselFeaturedImageExampleComponent,
    CarouselImageAboveExampleComponent,
    CarouselSpecialCardsExampleComponent,
    CarouselFullscreenImageExampleComponent,
    CarouselFullscreenImageStandardExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarouselModule { }
