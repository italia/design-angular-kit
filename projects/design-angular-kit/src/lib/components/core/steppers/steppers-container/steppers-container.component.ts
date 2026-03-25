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
  QueryList,
  inject,
  booleanAttribute,
} from '@angular/core';
import { ItSteppersItemComponent } from '../steppers-item/steppers-item.component';
import { ProgressBarColor } from '../../../../interfaces/core';
import { startWith, Subscription } from 'rxjs';
import { NgTemplateOutlet } from '@angular/common';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { ItButtonDirective } from '../../button/button.directive';
import { ItProgressBarComponent } from '../../progress-bar/progress-bar.component';
import { ItProgressButtonComponent } from '../../progress-button/progress-button.component';

@Component({
  selector: 'it-steppers-container',
  templateUrl: './steppers-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItIconComponent, NgTemplateOutlet, TranslateModule, ItButtonDirective, ItProgressBarComponent, ItProgressButtonComponent],
})
export class ItSteppersContainerComponent implements AfterViewInit, OnDestroy {
  private readonly _changeDetectorRef = inject(ChangeDetectorRef);

  /**
   * The confirmed label if different from default
   * @default null
   */
  @Input() confirmedLabel: string | null = null;

  /**
   * The active step index
   * @param index the step index
   */
  @Input({ required: true }) activeStep!: number;

  /**
   * Show the stepper header
   * @default true
   */
  @Input({ transform: booleanAttribute }) showHeader: boolean = true;

  /**
   * Dark style
   * @default false
   */
  @Input({ transform: booleanAttribute }) dark?: boolean;

  /**
   * The labels present in the header steps can be anticipated by the relative ordinal number.
   * @efualt false
   */
  @Input({ transform: booleanAttribute }) steppersNumber?: boolean;

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
  @Input({ transform: booleanAttribute }) showBackButton: boolean = true;

  /**
   * Disable the back button
   * @default false
   */
  @Input({ transform: booleanAttribute }) disableBackButton?: boolean;

  /**
   * Show the forward button
   * @default true
   */
  @Input({ transform: booleanAttribute }) showForwardButton: boolean = true;

  /**
   * Disable the forward button
   * @default false
   */
  @Input({ transform: booleanAttribute }) disableForwardButton?: boolean;

  /**
   * Show the confirm button
   * @default false
   */
  @Input({ transform: booleanAttribute }) showConfirmButton?: boolean;

  /**
   * Disable the confirm button
   * @default false
   */
  @Input({ transform: booleanAttribute }) disableConfirmButton?: boolean;

  /**
   * Show the confirm button as indeterminate progress button
   */
  @Input({ transform: booleanAttribute }) confirmLoading?: boolean;

  /**
   * Show the save button
   * @default false
   */
  @Input({ transform: booleanAttribute }) showSaveButton?: boolean;

  /**
   * Disable the save button
   * @default false
   */
  @Input({ transform: booleanAttribute }) disableSaveButton?: boolean;

  /**
   * Show the save button as indeterminate progress button
   */
  @Input({ transform: booleanAttribute }) saveLoading?: boolean;

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

  private stepsSubscriptions?: Array<Subscription>;

  constructor() {
    this.backClick = new EventEmitter<number>();
    this.forwardClick = new EventEmitter<number>();
    this.confirmClick = new EventEmitter<number>();
    this.saveClick = new EventEmitter<number>();
  }

  ngAfterViewInit(): void {
    this.steps?.changes
      .pipe(
        // When steps changes (dynamic add/remove)
        startWith(undefined)
      )
      .subscribe(() => {
        this.stepsSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
        this.stepsSubscriptions = this.steps?.map(step =>
          step.valueChanges.subscribe(() => {
            this._changeDetectorRef.detectChanges(); // DetectChanges when step attributes changes
          })
        );
        this._changeDetectorRef.detectChanges(); // Force update html render
      });
  }

  ngOnDestroy(): void {
    this.stepsSubscriptions?.forEach(step => step.unsubscribe());
  }
}
