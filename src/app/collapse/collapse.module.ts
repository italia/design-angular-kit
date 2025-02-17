import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseRoutingModule } from './collapse-routing.module';
import { CollapseExampleComponent } from './collapse-example/collapse-example.component';
import { CollapseExamplesComponent } from './collapse-examples/collapse-examples.component';
import { CollapseIndexComponent } from './collapse-index/collapse-index.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, CollapseRoutingModule],
  declarations: [CollapseIndexComponent, CollapseExampleComponent, CollapseExamplesComponent],
})
export class CollapseModule {}
