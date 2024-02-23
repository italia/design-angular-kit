import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerIndexComponent } from './spinner-index/spinner-index.component';
import { SharedModule } from '../shared/shared.module';
import { SpinnerRoutingModule } from './spinner-routing.module';
import { SpinnerExamplesComponent } from './spinner-examples/spinner-examples.component';
import { SpinnerSingleExampleComponent } from './spinner-single-example/spinner-single-example.component';
import { SpinnerDoubleExampleComponent } from './spinner-double-example/spinner-double-example.component';

@NgModule({
  declarations: [SpinnerIndexComponent, SpinnerExamplesComponent, SpinnerSingleExampleComponent, SpinnerDoubleExampleComponent],
  imports: [CommonModule, SharedModule, SpinnerRoutingModule],
})
export class SpinnerModule {}
