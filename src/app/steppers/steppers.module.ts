import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SteppersRoutingModule } from './steppers-routing.module';
import { SteppersIndexComponent } from './steppers-index/steppers-index.component';
import { SteppersExamplesComponent } from './steppers-examples/steppers-examples.component';
import { SteppersDynamicExampleComponent } from './steppers-dynamic-example/steppers-dynamic-example.component';
import { SteppersHeaderExampleComponent } from './steppers-header-example/steppers-header-example.component';
import { SteppersMobileExampleComponent } from './steppers-mobile-example/steppers-mobile-example.component';

@NgModule({
  declarations: [
    SteppersIndexComponent,
    SteppersExamplesComponent,
    SteppersDynamicExampleComponent,
    SteppersHeaderExampleComponent,
    SteppersMobileExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SteppersRoutingModule
  ]
})
export class SteppersModule {
}
