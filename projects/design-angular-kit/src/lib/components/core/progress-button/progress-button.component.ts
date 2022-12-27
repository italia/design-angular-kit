import {Component, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import {ProgressBarColor} from "../../../interfaces/core";

@Component({
  selector: 'it-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})
export class ProgressButtonComponent extends ButtonComponent {

  /**
   * The progress bar value [0, 100]
   */
  @Input() progress?: number;

  /**
   * Show the progress as indeterminate
   */
  @Input() progressIndeterminate?: BooleanInput;

  /**
   * The progress bar color
   */
  @Input() progressColor?: ProgressBarColor;

  get isProgress(): boolean {
    return this.progress !== undefined || this.isProgressIndeterminate;
  }

  get isProgressIndeterminate(): boolean {
    return isTrueBooleanInput(this.progressIndeterminate);
  }

  override get isDisabled(): boolean {
    return super.isDisabled || (this.isProgress && this.progress! > 0 && this.progress! < 100);
  }
}
