import { NgModule } from '@angular/core';
import { ItDimmerComponent } from './dimmer.component';
import { ItDimmerIconComponent } from './dimmer-icon/dimmer-icon.component';
import { ItDimmerButtonsComponent } from './dimmer-buttons/dimmer-buttons.component';

const dimmerComponents = [
  ItDimmerComponent,
  ItDimmerIconComponent,
  ItDimmerButtonsComponent
];

@NgModule({
  imports: dimmerComponents,
  exports: dimmerComponents
})
export class ItDimmerModule {
}
