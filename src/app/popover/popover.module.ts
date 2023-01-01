import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PopoverRoutingModule } from './popover-routing.module';
import { PopoverExampleComponent } from './popover-example/popover-example.component';
import { PopoverExamplesComponent } from './popover-examples/popover-examples.component';
import { PopoverIndexComponent } from './popover-index/popover-index.component';

import { SharedModule } from '../shared/shared.module';
import { PopoverPlacementsExampleComponent } from './popover-placements-example/popover-placements-example.component';
import { PopoverFocusExampleComponent } from './popover-focus-example/popover-focus-example.component';
import { PopoverDisabledExampleComponent } from './popover-disabled-example/popover-disabled-example.component';
import { PopoverContainerExampleComponent } from './popover-container-example/popover-container-example.component';
import { PopoverConfigExampleComponent } from './popover-config-example/popover-config-example.component';
import { PopoverInteractiveExampleComponent } from './popover-interactive-example/popover-interactive-example.component';

@NgModule({
  imports: [
    CommonModule,
    PopoverRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    PopoverExamplesComponent, PopoverIndexComponent, PopoverExampleComponent,
    PopoverPlacementsExampleComponent, PopoverFocusExampleComponent,
    PopoverDisabledExampleComponent, PopoverContainerExampleComponent,
    PopoverConfigExampleComponent, PopoverInteractiveExampleComponent
  ]
})
export class PopoverModule { }
