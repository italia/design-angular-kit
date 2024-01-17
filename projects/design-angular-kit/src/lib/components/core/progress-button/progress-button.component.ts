import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressBarColor } from '../../../interfaces/core';
import { ItProgressBarComponent } from '../progress-bar/progress-bar.component';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[itButton][progress]',
  templateUrl: './progress-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, ItProgressBarComponent]
})
export class ItProgressButtonComponent {

  /**
   * Behavior of the progress bar
   * - <b>true</b>: Show indeterminate progress bar
   * - <b>false</b> or <b>undefined</b>: Hide progress bar
   * - <b>number</b> [0, 100]: Assign a specific value to the progress bar
   * @default undefined
   */
  @Input() progress: number | boolean | undefined;

  /**
   * The progress bar color
   */
  @Input() progressColor: ProgressBarColor | undefined;

  get isProgress(): boolean {
    return typeof this.progress === 'number' || !!this.progress;
  }

  get progressValue(): number {
    return typeof this.progress === 'number' ? this.progress : 0;
  }

  get isIndeterminate(): boolean {
    return typeof this.progress !== 'number' && !!this.progress;
  }

}
