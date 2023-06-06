import { NgModule } from '@angular/core';
import { SteppersContainerComponent } from './steppers-container/steppers-container.component';
import { SteppersItemComponent } from './steppers-item/steppers-item.component';

const steppersComponents = [
  SteppersContainerComponent,
  SteppersItemComponent
];

@NgModule({
  imports: steppersComponents,
  exports: steppersComponents
})
export class SteppersModule {
}
