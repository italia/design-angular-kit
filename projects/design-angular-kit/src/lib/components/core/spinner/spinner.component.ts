import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

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
  @Input({ transform: booleanAttribute }) active: boolean = true;

  /**
   * Show a small spinner
   * @default false
   */
  @Input({ transform: booleanAttribute }) small?: boolean;

  /**
   * Show the double animation
   * @default false
   */
  @Input({ transform: booleanAttribute }) double?: boolean;
}
