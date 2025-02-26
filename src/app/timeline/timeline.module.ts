import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TimelineIndexComponent } from './timeline-index/timeline-index.component';
import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineExamplesComponent } from './timeline-examples/timeline-examples.component';
import { TimelineDefaultExampleComponent } from './timeline-default-example/timeline-default-example.component';

@NgModule({
  declarations: [TimelineIndexComponent, TimelineIndexComponent, TimelineExamplesComponent, TimelineDefaultExampleComponent],
  imports: [CommonModule, SharedModule, TimelineRoutingModule],
})
export class TimelineModule {}
