import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeIndexComponent } from './range-index/range-index.component';
import { SharedModule } from '../shared/shared.module';
import { RangeExamplesComponent } from './range-examples/range-examples.component';
import { RangeExampleComponent } from './range-example/range-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RangeRoutingModule } from './range-routing.module';
import { RangeCustomColorsComponent } from './range-custom-colors/range-custom-colors.component';

@NgModule({
  declarations: [RangeIndexComponent, RangeExamplesComponent, RangeExampleComponent, RangeCustomColorsComponent],
  imports: [CommonModule, SharedModule, RangeRoutingModule, ReactiveFormsModule, FormsModule],
})
export class RangeModule {}
