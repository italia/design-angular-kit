import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-spinner',
  templateUrl: './spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
})
export class ItSpinnerComponent {
  /**
   * The spinner is active
   * @default true
   */
  @Input({ transform: inputToBoolean }) active: boolean = true;

  /**
   * Show a small spinner
   * @default false
   */
  @Input({ transform: inputToBoolean }) small?: boolean;

  /**
   * Show the double animation
   * @default false
   */
  @Input({ transform: inputToBoolean }) double?: boolean;
}
