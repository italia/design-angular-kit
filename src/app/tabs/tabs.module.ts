import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { SharedModule } from '../shared/shared.module';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsExampleComponent } from './tabs-example/tabs-example.component';
import { TabsExamplesComponent } from './tabs-examples/tabs-examples.component';
import { TabsIndexComponent } from './tabs-index/tabs-index.component';


@NgModule({
  imports: [
    CommonModule,
    DesignAngularKitModule,
    SharedModule,
    TabsRoutingModule
  ],
  declarations: [TabsExampleComponent, TabsExamplesComponent, TabsIndexComponent]
})
export class TabsModule { }
