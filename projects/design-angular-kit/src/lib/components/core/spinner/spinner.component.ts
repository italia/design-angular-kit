import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-spinner',
  templateUrl: './spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {

  /**
   * The spinner is active
   */
  @Input() active: BooleanInput = true;

  /**
   * Show a small spinner
   */
  @Input() small?: BooleanInput;

  /**
   * Show the double animation
   */
  @Input() double?: BooleanInput;

  get isActive(): boolean {
    return isTrueBooleanInput(this.active);
  }

  get isSmall(): boolean {
    return isTrueBooleanInput(this.small);
  }

  get isDouble(): boolean {
    return isTrueBooleanInput(this.double);
  }

}
