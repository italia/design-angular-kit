import { Directive, HostBinding, Input } from '@angular/core';
import { BadgeColor } from '../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Directive({
  selector: '[itBadge]',
  exportAs: 'itBadge'
})
export class BadgeDirective {

  /**
   * Define the badge color
   */
  @Input('itBadge') color?: BadgeColor;

  /**
   * Show rounded badge
   */
  @Input('rounded') rounded?: BooleanInput;

  @HostBinding('class')
  get badgeClass(): string {
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
