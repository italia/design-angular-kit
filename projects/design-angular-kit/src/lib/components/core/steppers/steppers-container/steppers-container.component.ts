import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList
} from '@angular/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { ItSteppersItemComponent } from '../steppers-item/steppers-item.component';
import { ProgressBarColor } from '../../../../interfaces/core';
import { startWith, Subscription } from 'rxjs';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { ItButtonDirective } from '../../button/button.directive';
import { ItProgressBarComponent } from '../../progress-bar/progress-bar.component';
import { ItProgressButtonComponent } from '../../progress-button/progress-button.component';

@Component({
  standalone: true,
  selector: 'it-steppers-container[activeStep]',
  templateUrl: './steppers-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgForOf, ItIconComponent, NgTemplateOutlet, TranslateModule, ItButtonDirective, ItProgressBarComponent, ItProgressButtonComponent]
})
export class ItSteppersContainerComponent implements AfterViewInit, OnDestroy {

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
  @Input() dark: BooleanInput | undefined;

  /**
   * The labels present in the header steps can be anticipated by the relative ordinal number.
   */
  @Input() steppersNumber: BooleanInput | undefined;

  /**
   * The progress style
   * -<b>progress</b>: Show progress bar - You can change the color with the `progressColor` attribute
   * -<b>dots</b>: Show progress dots
   * @default undefined - don't show progress
   */
  @Input() progressStyle: 'progress' | 'dots' | undefined;

  /**
   * Customize progress color
   */
  @Input() progressColor: ProgressBarColor | undefined;

  /**
   * Show the back button
   * @default true
   */
  @Input() showBackButton: BooleanInput = true;

  /**
   * Disable the back button
   * @default false
   */
  @Input() disableBackButton: BooleanInput | undefined;

  /**
   * Show the forward button
   * @default true
   */
  @Input() showForwardButton: BooleanInput = true;

  /**
   * Disable the forward button
   * @default false
   */
  @Input() disableForwardButton: BooleanInput | undefined;

  /**
   * Show the confirm button
   * @default false
   */
  @Input() showConfirmButton: BooleanInput | undefined;

  /**
   * Disable the confirm button
   * @default false
   */
  @Input() disableConfirmButton: BooleanInput | undefined;

  /**
   * Show the confirm button as indeterminate progress button
   */
  @Input() confirmLoading: BooleanInput | undefined;

  /**
   * Show the save button
   * @default false
   */
  @Input() showSaveButton: BooleanInput | undefined;

  /**
   * Disable the save button
   * @default false
   */
  @Input() disableSaveButton: BooleanInput | undefined;

  /**
   * Show the save button as indeterminate progress button
   */
  @Input() saveLoading: BooleanInput | undefined;

  /**
   * The stepper items
   */
  @ContentChildren(ItSteppersItemComponent) steps?: QueryList<ItSteppersItemComponent>;

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

  get isDisableBackButton(): boolean {
    return isTrueBooleanInput(this.disableBackButton);
  }

  get isShowForwardButton(): boolean {
    return isTrueBooleanInput(this.showForwardButton);
  }

  get isDisableForwardButton(): boolean {
    return isTrueBooleanInput(this.disableForwardButton);
  }

  get isShowConfirmButton(): boolean {
    return isTrueBooleanInput(this.showConfirmButton);
  }

  get isDisableConfirmButton(): boolean {
    return isTrueBooleanInput(this.disableConfirmButton);
  }

  get isConfirmLoading(): boolean {
    return isTrueBooleanInput(this.confirmLoading);
  }

  get isShowSaveButton(): boolean {
    return isTrueBooleanInput(this.showSaveButton);
  }

  get isDisableSaveButton(): boolean {
    return isTrueBooleanInput(this.disableSaveButton);
  }

  get isSaveLoading(): boolean {
    return isTrueBooleanInput(this.saveLoading);
  }

  private stepsSubscriptions?: Array<Subscription>;

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    this.backClick = new EventEmitter<number>();
    this.forwardClick = new EventEmitter<number>();
    this.confirmClick = new EventEmitter<number>();
    this.saveClick = new EventEmitter<number>();
  }

  ngAfterViewInit(): void {
    this.steps?.changes.pipe( // When steps changes (dynamic add/remove)
      startWith(undefined)
    ).subscribe(() => {
      this.stepsSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
      this.stepsSubscriptions = this.steps?.map(step => step.valueChanges.subscribe(() => {
        this._changeDetectorRef.detectChanges(); // DetectChanges when step attributes changes
      }));
      this._changeDetectorRef.detectChanges(); // Force update html render
    });
  }

  ngOnDestroy(): void {
    this.stepsSubscriptions?.forEach(step => step.unsubscribe());
  }
}
