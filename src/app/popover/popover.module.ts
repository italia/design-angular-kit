import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverRoutingModule } from './popover-routing.module';
import { PopoverExampleComponent } from './popover-example/popover-example.component';
import { PopoverExamplesComponent } from './popover-examples/popover-examples.component';
import { PopoverIndexComponent } from './popover-index/popover-index.component';

import { SharedModule } from '../shared/shared.module';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    PopoverRoutingModule,
    DesignAngularKitModule,
    SharedModule,
    PopoverRoutingModule
  ],
  declarations: [PopoverExampleComponent, PopoverExamplesComponent, PopoverIndexComponent]
})
export class PopoverModule { }
