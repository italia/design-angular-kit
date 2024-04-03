import { NgModule } from '@angular/core';
import { ItTimelineContainerComponent } from './timeline-container/timeline-container.component';
import { ItTimelineItemComponent } from './timeline-item/timeline-item.component';

const timelineComponents = [ItTimelineContainerComponent, ItTimelineItemComponent];

@NgModule({
  imports: timelineComponents,
  exports: timelineComponents,
})
export class ItTimelineModule {}
