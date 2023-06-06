import { NgModule } from '@angular/core';
import { DimmerComponent } from './dimmer.component';
import { DimmerIconComponent } from './dimmer-icon/dimmer-icon.component';
import { DimmerButtonsComponent } from './dimmer-buttons/dimmer-buttons.component';

const dimmerComponents = [
  DimmerComponent,
  DimmerIconComponent,
  DimmerButtonsComponent
];

@NgModule({
  imports: dimmerComponents,
  exports: dimmerComponents
})
export class DimmerModule {
}
