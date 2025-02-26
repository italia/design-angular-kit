import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItMegamenuComponent {
  /**
   * Megamenu mode
   */
  @Input() mode: 'right-section' | 'left-section' | 'normal' = 'normal';

  /**
   * To show Megamenu header
   * @default false
   */
  @Input({ transform: inputToBoolean }) header?: boolean;

  /**
   * To show Megamenu footer
   * @default false
   */
  @Input({ transform: inputToBoolean }) footer?: boolean;
}
