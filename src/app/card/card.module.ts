import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardExampleComponent } from './card-example/card-example.component';
import { CardExamplesComponent } from './card-examples/card-examples.component';
import { CardIndexComponent } from './card-index/card-index.component';
import { CardRoutingModule } from './card-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardArticleComponent } from './card-article/card-article.component';
import { CardIconComponent } from './card-icon/card-icon.component';
import { CardShadowComponent } from './card-shadow/card-shadow.component';
import { CardBigComponent } from './card-big/card-big.component';
import { CardCtaComponent } from './card-cta/card-cta.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardSpecialComponent } from './card-special/card-special.component';
import { CardTeaserComponent } from './card-teaser/card-teaser.component';


@NgModule({
  declarations: [
    CardExampleComponent,
    CardExamplesComponent,
    CardIndexComponent,
    CardArticleComponent,
    CardIconComponent,
    CardShadowComponent,
    CardBigComponent,
    CardCtaComponent,
    CardImageComponent,
    CardSpecialComponent,
    CardTeaserComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    SharedModule
  ]
})
export class CardModule { }
