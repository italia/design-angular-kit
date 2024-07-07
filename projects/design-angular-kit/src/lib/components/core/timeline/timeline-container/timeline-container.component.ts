import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItTimelineItemComponent } from '../timeline-item/timeline-item.component';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { ItAbstractComponent } from 'projects/design-angular-kit/src/lib/abstracts/abstract.component';
import { TimelineElement } from 'projects/design-angular-kit/src/lib/interfaces/core';

/**
 * Timeline
 * @description Build timeline for chronological representation of events.
 */
@Component({
  standalone: true,
  selector: 'it-timeline-container',
  templateUrl: './timeline-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, TranslateModule, ItTimelineItemComponent],
})
export class ItTimelineContainerComponent extends ItAbstractComponent {
  /** Timeline elements array
   * @default []
   */
  @Input() timelineElements: TimelineElement[] = [];
  /** Default date format for timeline element reference date
   * @default dd/MM/yyyy
   */
  @Input() dateFormat: string = 'dd/MM/yyyy';
}
