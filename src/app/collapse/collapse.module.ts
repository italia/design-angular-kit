import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseRoutingModule } from './collapse-routing.module';
import { CollapseExampleComponent } from './collapse-example/collapse-example.component';
import { CollapseExamplesComponent } from './collapse-examples/collapse-examples.component';
import { CollapseIndexComponent } from './collapse-index/collapse-index.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { CollapseGroupExampleComponent } from './collapse-group-example/collapse-group-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DesignAngularKitModule,
    SharedModule,
    CollapseRoutingModule
  ],
  declarations: [CollapseExampleComponent, CollapseExamplesComponent, CollapseIndexComponent, CollapseGroupExampleComponent]
})
export class CollapseModule { }
