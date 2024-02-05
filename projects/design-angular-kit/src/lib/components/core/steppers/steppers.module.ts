import { NgModule } from '@angular/core';
import { ItSteppersContainerComponent } from './steppers-container/steppers-container.component';
import { ItSteppersItemComponent } from './steppers-item/steppers-item.component';

const steppersComponents = [ItSteppersContainerComponent, ItSteppersItemComponent];

@NgModule({
  imports: steppersComponents,
  exports: steppersComponents,
})
export class ItSteppersModule {}
