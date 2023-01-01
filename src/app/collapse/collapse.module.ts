import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseRoutingModule } from './collapse-routing.module';
import { CollapseExampleComponent } from './collapse-example/collapse-example.component';
import { CollapseExamplesComponent } from './collapse-examples/collapse-examples.component';
import { CollapseIndexComponent } from './collapse-index/collapse-index.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CollapseGroupExampleComponent } from './collapse-group-example/collapse-group-example.component';
import { CollapseNestedExampleComponent } from './collapse-nested-example/collapse-nested-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CollapseRoutingModule
  ],
  declarations: [CollapseExampleComponent, CollapseExamplesComponent, CollapseIndexComponent,
    CollapseGroupExampleComponent, CollapseNestedExampleComponent]
})
export class CollapseModule { }
