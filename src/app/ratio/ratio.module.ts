import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RatioIndexComponent } from './ratio-index/ratio-index.component';
import { RatioRoutingModule } from './ratio-routing.module';
import { RatioExamplesComponent } from './ratio-examples/ratio-examples.component';
import { RatioExampleComponent } from './ratio-example/ratio-example.component';

@NgModule({
  imports: [CommonModule, SharedModule, RatioRoutingModule],
  declarations: [RatioIndexComponent, RatioExamplesComponent, RatioExampleComponent],
})
export class RatioModule {}
