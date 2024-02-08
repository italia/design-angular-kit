import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-megamenu',
  templateUrl: './megamenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItMegamenuComponent {
  /**
   * Megamenu mode
   */
  @Input() mode: 'right-section' | 'left-section' | 'normal' = 'normal';

  /**
   * To show megamenu header
   * @default false
   */
  @Input({ transform: inputToBoolean }) header?: boolean;

  /**
   * To show megamenu footer
   * @default false
   */
  @Input({ transform: inputToBoolean }) footer?: boolean;
}
