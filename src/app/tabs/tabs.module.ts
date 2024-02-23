import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsExampleComponent } from './tabs-example/tabs-example.component';
import { TabsExamplesComponent } from './tabs-examples/tabs-examples.component';
import { TabsIndexComponent } from './tabs-index/tabs-index.component';
import { TabsDynamicExampleComponent } from './tabs-dynamic-example/tabs-dynamic-example.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, TabsRoutingModule],
  declarations: [TabsExampleComponent, TabsExamplesComponent, TabsIndexComponent, TabsDynamicExampleComponent],
})
export class TabsModule {}
