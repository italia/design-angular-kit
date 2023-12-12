import { Directive, HostBinding, Input } from '@angular/core';
import { BadgeColor } from '../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

/**
 * Badge
 * @description Useful for small counters and labels
 */
@Directive({
  standalone: true,
  selector: '[itBadge]',
  exportAs: 'itBadge'
})
export class ItBadgeDirective {

  /**
   * Define the badge color
   * @default undefined
   */
  @Input('itBadge') color: BadgeColor | undefined;

  /**
   * Show rounded badge
   * @default false
   */
  @Input() rounded: BooleanInput | undefined;

  @HostBinding('class')
  protected get badgeClass(): string {
    let badgeClass = 'badge';
    if (isTrueBooleanInput(this.rounded)) {
      badgeClass += ` rounded-pill`;
    }
    if (this.color) {
      badgeClass += ` bg-${this.color}`;
    }

    return badgeClass;
  }

}
