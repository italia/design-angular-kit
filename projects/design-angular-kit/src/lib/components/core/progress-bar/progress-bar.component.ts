import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressBarColor } from '../../../interfaces/core';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

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
   * @default false
   */
  @Input({ transform: inputToBoolean }) showLabel?: boolean;

  /**
   * Show the progress as indeterminate
   * @default false
   */
  @Input({ transform: inputToBoolean }) indeterminate?: boolean;

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

}
