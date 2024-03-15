import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RatingRoutingModule } from './rating-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingIndexComponent } from './rating-index/rating-index.component';
import { RatingExamplesComponent } from './rating-examples/rating-examples.component';
import { RatingExampleComponent } from './rating-example/rating-example.component';
import { RatingExampleReadonlyComponent } from './rating-example-readonly/rating-example-readonly.component';

@NgModule({
  declarations: [RatingIndexComponent, RatingExamplesComponent, RatingExampleComponent, RatingExampleReadonlyComponent],
  imports: [CommonModule, SharedModule, RatingRoutingModule, FormsModule, ReactiveFormsModule],
})
export class RatingModule {}
