import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardExampleComponent } from './card-example/card-example.component';
import { CardExamplesComponent } from './card-examples/card-examples.component';
import { CardIndexComponent } from './card-index/card-index.component';
import { CardRoutingModule } from './card-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CardExampleComponent,
    CardExamplesComponent,
    CardIndexComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    SharedModule
  ]
})
export class CardModule { }
