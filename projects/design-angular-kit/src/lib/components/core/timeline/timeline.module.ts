import { NgModule } from '@angular/core';
import { ItTimelineComponent } from './timeline.component';
import { ItTimelineItemComponent } from './timeline-item/timeline-item.component';

const timelineComponents = [ItTimelineComponent, ItTimelineItemComponent];

@NgModule({
  imports: timelineComponents,
  exports: timelineComponents,
})
export class ItTimelineModule {}
