import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList
} from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { SteppersItemComponent } from '../steppers-item/steppers-item.component';
import { ProgressBarColor } from '../../../../interfaces/core';

@Component({
  selector: 'it-steppers-container[activeStep]',
  templateUrl: './steppers-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SteppersContainerComponent implements AfterViewInit {

  /**
   * The active step index
   * @param index the step index
   */
  @Input() activeStep!: number;

  /**
   * Show the stepper header
   * @default true
   */
  @Input() showHeader: BooleanInput = true;

  /**
   * Dark style
   */
  @Input() dark?: BooleanInput;

  /**
   * The labels present in the header steps can be anticipated by the relative ordinal number.
   */
  @Input() steppersNumber?: BooleanInput;

  /**
   * The progress style
   * -<b>progress</b>: Show progress bar - You can change the color with the `progressColor` attribute
   * -<b>dots</b>: Show progress dots
   * @default undefined - don't show progress
   */
  @Input() progressStyle?: 'progress' | 'dots';

  /**
   * Customize progress color
   */
  @Input() progressColor?: ProgressBarColor;

  /**
   * Show the back button
   * @default true
   */
  @Input() showBackButton: BooleanInput = true;

  /**
   * Show the forward button
   * @default true
   */
  @Input() showForwardButton: BooleanInput = true;

  /**
   * Show the confirm button
   * @default false
   */
  @Input() showConfirmButton: BooleanInput = false;

  /**
   * Show the save button
   * @default false
   */
  @Input() showSaveButton: BooleanInput = false;

  /**
   * The stepper items
   */
  @ContentChildren(SteppersItemComponent) steps?: QueryList<SteppersItemComponent>;

  /**
   * On back button click
   * @event activeStep the current step index
   */
  @Output() backClick: EventEmitter<number>;

  /**
   * On forward button click
   * @event activeStep the current step index
   */
  @Output() forwardClick: EventEmitter<number>;

  /**
   * On confirm button click
   * @event activeStep the current step index
   */
  @Output() confirmClick: EventEmitter<number>;

  /**
   * On save button click
   * @event activeStep the current step index
   */
  @Output() saveClick: EventEmitter<number>;

  get isShowHeader(): boolean {
    return isTrueBooleanInput(this.showHeader);
  }

  get isSteppersNumber(): boolean {
    return isTrueBooleanInput(this.steppersNumber);
  }

  get isDark(): boolean {
    return isTrueBooleanInput(this.dark);
  }

  get isShowBackButton(): boolean {
    return isTrueBooleanInput(this.showBackButton);
  }

  get isShowForwardButton(): boolean {
    return isTrueBooleanInput(this.showForwardButton);
  }

  get isShowConfirmButton(): boolean {
    return isTrueBooleanInput(this.showConfirmButton);
  }

  get isShowSaveButton(): boolean {
    return isTrueBooleanInput(this.showSaveButton);
  }

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    this.backClick = new EventEmitter<number>();
    this.forwardClick = new EventEmitter<number>();
    this.confirmClick = new EventEmitter<number>();
    this.saveClick = new EventEmitter<number>();
  }

  ngAfterViewInit(): void {
    this._changeDetectorRef.detectChanges();

    this.steps?.changes.subscribe(() => {
      this._changeDetectorRef.detectChanges();
    });
  }
}
