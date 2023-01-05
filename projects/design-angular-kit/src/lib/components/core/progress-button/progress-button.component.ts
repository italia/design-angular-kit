import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { ProgressBarColor } from '../../../interfaces/core';

@Component({
  selector: 'button[itButton][progress]',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressButtonComponent {

  /**
   * Behavior of the progress bar
   * - <b>true</b>: Show indeterminate progress bar
   * - <b>false</b> or <b>undefined</b>: Hide progress bar
   * - <b>number</b> [0, 100]: Assign a specific value to the progress bar
   * @default undefined
   */
  @Input() progress?: number | BooleanInput;

  /**
   * The progress bar color
   */
  @Input() progressColor?: ProgressBarColor;

  get isProgress(): boolean {
    return typeof this.progress === 'number' || isTrueBooleanInput(this.progress);
  }

  get progressValue(): number {
    return typeof this.progress === 'number' ? this.progress : 0;
  }

  get isIndeterminate(): boolean {
    return typeof this.progress !== 'number' && isTrueBooleanInput(this.progress);
  }

}
