import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressBarColor } from '../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-progress-bar[value]',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {

  /**
   * The progress bar value [0, 100]
   */
  @Input() value!: number;

  /**
   * Show the progress label
   */
  @Input() showLabel?: BooleanInput;

  /**
   * Show the progress as indeterminate
   */
  @Input() indeterminate?: BooleanInput;

  /**
   * The progress bar color
   */
  @Input() color?: ProgressBarColor;

  /**
   * Return the background color
   */
  get bgColor(): string {
    if (!this.color) {
      return '';
    }

    return ` bg-${this.color}`;
  }

  get isIndeterminate(): boolean {
    return isTrueBooleanInput(this.indeterminate);
  }
}
