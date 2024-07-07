import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { DatePipe, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TimelinePINType } from 'projects/design-angular-kit/src/lib/interfaces/core';
import { IconName } from 'projects/design-angular-kit/src/lib/interfaces/icon';

/**
 * Timeline Item
 * @description Represents a single event for Timeline component.
 */
@Component({
  standalone: true,
  selector: 'it-timeline-item',
  templateUrl: './timeline-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, DatePipe, TranslateModule, NgClass],
})
export class ItTimelineItemComponent extends ItAbstractComponent {
  /** Timeline element title */
  @Input({ required: true }) title!: string;
  /** Timeline element text */
  @Input({ required: true }) text!: string;
  /** Timeline element signature */
  @Input() signature?: string | undefined;
  /** Timeline element reference date */
  @Input() eventDate?: Date | undefined;
  /** Timeline element reference date format
   * @default dd/MM/yyyy
   */
  @Input() dateFormat?: string | undefined = 'dd/MM/yyyy';

  /** Timeline element PIN text */
  @Input({ required: true }) pinText!: string;
  /** Timeline element PIN type
   * @default none
   */
  @Input() pinType?: TimelinePINType | undefined = 'default';
  /** Timeline element PIN icon
   * @default code-circle
   */
  @Input() pinIcon?: IconName | undefined = 'code-circle';

  /** Timeline element category title */
  @Input() categoryTitle?: string | undefined;
  /** Timeline element category link */
  @Input() categoryLink?: string | undefined;

  /** Timeline element show detail link
   * @default false
   */
  @Input({ transform: booleanAttribute })
  showReadMore: boolean = false;
  /** Timeline element detail link
   * @default #
   */
  @Input() readMoreLink: string | undefined = '#';
}
