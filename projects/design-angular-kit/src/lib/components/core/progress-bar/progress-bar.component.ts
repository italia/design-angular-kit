import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressBarColor } from '../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'it-progress-bar[value]',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule]
})
export class ItProgressBarComponent {

  /**
   * The progress bar value [0, 100]
   */
  @Input() value!: number;

  /**
   * Show the progress label
   */
  @Input() showLabel: BooleanInput | undefined;

  /**
   * Show the progress as indeterminate
   */
  @Input() indeterminate: BooleanInput | undefined;

  /**
   * The progress bar color
   */
  @Input() color: ProgressBarColor | undefined;

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
