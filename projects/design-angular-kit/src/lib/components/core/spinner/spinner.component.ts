import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'it-spinner',
  templateUrl: './spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule]
})
export class SpinnerComponent {

  /**
   * The spinner is active
   */
  @Input() active: BooleanInput = true;

  /**
   * Show a small spinner
   */
  @Input() small: BooleanInput | undefined;

  /**
   * Show the double animation
   */
  @Input() double: BooleanInput | undefined;

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
