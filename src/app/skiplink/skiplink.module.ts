import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkiplinkExampleComponent } from './skiplink-example/skiplink-example.component';
import { SkiplinkExamplesComponent } from './skiplink-examples/skiplink-examples.component';
import { SkiplinkIndexComponent } from './skiplink-index/skiplink-index.component';

import { SkiplinkRoutingModule } from './skiplink-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SkiplinkExampleComponent, SkiplinkExamplesComponent, SkiplinkIndexComponent],
  imports: [CommonModule, SharedModule, SkiplinkRoutingModule],
})
export class SkiplinkModule {}
