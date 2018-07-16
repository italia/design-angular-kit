import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverRoutingModule } from './popover-routing.module';
import { PopoverExampleComponent } from './popover-example/popover-example.component';
import { PopoverExamplesComponent } from './popover-examples/popover-examples.component';
import { PopoverIndexComponent } from './popover-index/popover-index.component';

import { SharedModule } from '../shared/shared.module';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { PopoverPlacementsExampleComponent } from './popover-placements-example/popover-placements-example.component';
import { PopoverFocusExampleComponent } from './popover-focus-example/popover-focus-example.component';
import { PopoverDisabledExampleComponent } from './popover-disabled-example/popover-disabled-example.component';
import { PopoverEventsExampleComponent } from './popover-events-example/popover-events-example.component';
import { PopoverContainerExampleComponent } from './popover-container-example/popover-container-example.component';

@NgModule({
  imports: [
    CommonModule,
    PopoverRoutingModule,
    DesignAngularKitModule,
    SharedModule,
    PopoverRoutingModule
  ],
  declarations: [
    PopoverExamplesComponent, PopoverIndexComponent, PopoverExampleComponent,
    PopoverPlacementsExampleComponent, PopoverFocusExampleComponent,
    PopoverDisabledExampleComponent, PopoverEventsExampleComponent, PopoverContainerExampleComponent
  ]
})
export class PopoverModule { }
