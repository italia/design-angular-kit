import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CalloutAppearance, CalloutColor } from '../../../interfaces/core';
import { IconName } from '../../../interfaces/icon';

/**
 * Callout
 * @description Callouts can be used to highlight certain parts of the text that require particular attention. They may contain error messages, warnings, hints, etc.
 */
@Component({
  selector: 'it-callout',
  templateUrl: './callout.component.html',
  styles: [`
    .callout-big-text:empty {
      display: none;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalloutComponent {

  /**
   * Callout label
   * @default undefined
   */
  @Input() label?: string;

  /**
   * Callout hiddenLabel
   * @default undefined
   */
  @Input() hiddenLabel?: string;

  /**
   * Callout color
   * - <b>success</b>
   * - <b>danger</b>
   * - <b>warning</b>
   * - <b>important</b>
   * - <b>note</b>
   * @default undefined
   */
  @Input() color?: CalloutColor;

  /**
   * Callout appearance
   * - <b>default</b>
   * - <b>highlight</b>: Callout version with border only on the left side
   * - <b>more</b>: It looks radically different from the other styles available and is suitable for more extensive texts
   * @default default
   */
  @Input() appearance: CalloutAppearance = 'default';

  /**
   * Custom icon
   * @default undefined
   */
  @Input() icon?: IconName;

  protected get iconName(): IconName {
    if (this.icon) {
      return this.icon;
    }

    if (this.appearance === 'more') {
      return 'zoom-in';
    }

    switch (this.color) {
      case 'success':
        return 'check-circle';
      case 'warning':
        return 'help-circle';
      case 'danger':
        return 'close-circle';
      case 'important':
      case 'note':
      default:
        return 'info-circle';
    }
  }

}
