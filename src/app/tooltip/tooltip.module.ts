import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { TooltipExamplesComponent } from './tooltip-examples/tooltip-examples.component';
import { TooltipIndexComponent } from './tooltip-index/tooltip-index.component';
import { SharedModule } from '../shared/shared.module';
import { TooltipPlacementsExampleComponent } from './tooltip-placements-example/tooltip-placements-example.component';
import { TooltipEventsExampleComponent } from './tooltip-events-example/tooltip-events-example.component';
import { TooltipDisabledExampleComponent } from './tooltip-disabled-example/tooltip-disabled-example.component';
import { TooltipConfigExampleComponent } from './tooltip-config-example/tooltip-config-example.component';

@NgModule({
  imports: [CommonModule, SharedModule, TooltipRoutingModule],
  declarations: [
    TooltipExampleComponent,
    TooltipExamplesComponent,
    TooltipIndexComponent,
    TooltipPlacementsExampleComponent,
    TooltipEventsExampleComponent,
    TooltipDisabledExampleComponent,
    TooltipConfigExampleComponent,
  ],
})
export class TooltipModule {}
