import { Component, Input } from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { ProgressBarColor } from '../../../interfaces/core';

@Component({
  selector: 'button[itButton][progress]',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})
export class ProgressButtonComponent {

  /**
   * The progress bar value [0, 100]
   * @default null
   */
  @Input() progress?: number | null = null;

  /**
   * Show the progress as indeterminate
   */
  @Input() indeterminate?: BooleanInput;

  /**
   * The progress bar color
   */
  @Input() progressColor?: ProgressBarColor;

  get isProgress(): boolean {
    return (this.progress !== null && this.progress !== undefined) || this.isIndeterminate;
  }

  get isIndeterminate(): boolean {
    return isTrueBooleanInput(this.indeterminate);
  }

}
