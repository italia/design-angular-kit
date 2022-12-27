import { Component, Input } from '@angular/core';
import { AlertColor } from '../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  /**
   * The alert color
   * @default info
   */
  @Input() color: AlertColor = 'info';

  /**
   * Inserts the close button
   */
  @Input() dismissible?: BooleanInput;

  get isDismissible(): boolean {
    return isTrueBooleanInput(this.dismissible);
  }
}
