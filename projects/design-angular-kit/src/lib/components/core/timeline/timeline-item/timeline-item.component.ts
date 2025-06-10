import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { DatePipe, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TimelinePINType } from '../../../../interfaces/core';
import { IconName } from '../../../../interfaces/icon';
import { inputToBoolean } from '../../../../utils/coercion';

/**
 * Timeline Item
 * @description Represents a single event for Timeline component.
 */
@Component({
  selector: 'it-timeline-item',
  templateUrl: './timeline-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, DatePipe, TranslateModule, NgClass],
})
export class ItTimelineItemComponent extends ItAbstractComponent {
  /**
   * Timeline element title
   */
  @Input({ required: true }) title!: string;

  /**
   * Timeline element text
   */
  @Input({ required: true }) text!: string;

  /**
   * Timeline element signature
   */
  @Input() signature: string | undefined;

  /**
   * Timeline element reference date
   */
  @Input() eventDate: Date | undefined;

  /**
   * Timeline element reference date format
   * @default dd/MM/yyyy
   */
  @Input() dateFormat: string = 'dd/MM/yyyy';

  /**
   * Timeline element PIN text
   */
  @Input({ required: true }) pinText: string | undefined;

  /**
   * Timeline element PIN type
   * @default none
   */
  @Input() pinType: TimelinePINType | undefined = 'default';

  /**
   * Timeline element PIN icon
   * @default code-circle
   */
  @Input() pinIcon: IconName | undefined = 'code-circle';

  /**
   * Timeline element PIN icon
   * @default code-circle
   */
  @Input() pinIconTitle: string | undefined;

  /**
   * Timeline element category label
   */
  @Input() categoryLabel: string | undefined = 'Categoria evento: ';

  /**
   * Timeline element date label
   */
  @Input() dateLabel: string | undefined = 'Data evento: ';

  /**
   * Timeline element category title
   */
  @Input() categoryTitle: string | undefined;

  /**
   * Timeline element category link
   */
  @Input() categoryLink: string | undefined;

  /**
   * Timeline element show detail link
   * @default false
   */
  @Input({ transform: inputToBoolean })
  showReadMore: boolean = false;

  /** Timeline element detail link
   * @default #
   */
  @Input() readMoreLink: string | undefined = '#';
}
