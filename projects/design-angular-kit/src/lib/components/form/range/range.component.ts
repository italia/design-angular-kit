import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'it-range',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItRangeComponent extends ItAbstractFormComponent<number | null | undefined> implements OnInit, OnChanges, OnDestroy {
  /**
   * The max value
   */
  @Input() max?: number;

  /**
   * The min value
   */
  @Input() min?: number;

  /**
   * The step value
   */
  @Input() step?: number | 'any';

  /**
   * The color on left of thumb [Require rightColor]
   * @example '#0d6efd' or 'var(--bs-primary)'
   * @default undefined ('var(--bs-gray-300)')
   */
  @Input() leftColor?: string;

  /**
   * The color on right of thumb [Require leftColor]
   * @example '#0d6efd' or 'var(--bs-primary)'
   * @default undefined ('var(--bs-gray-300)')
   */
  @Input() rightColor?: string;

  @ViewChild('slider', { static: true }) slider!: ElementRef<HTMLInputElement>;

  private subscription?: Subscription;

  override ngOnInit() {
    super.ngOnInit();
    this.subscription = this.control.valueChanges
      .pipe(distinctUntilChanged(), startWith(undefined))
      .subscribe(() => this.updateSliderColor());
  }

  override ngOnChanges(changes: SimpleChanges) {
    if (changes['leftColor']) {
      this.slider.nativeElement.style.setProperty('--range-left-color', this.leftColor ?? null);
    }
    if (changes['rightColor']) {
      this.slider.nativeElement.style.setProperty('--range-right-color', this.rightColor ?? null);
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  override writeValue(value: number | null | undefined) {
    super.writeValue(value);
    this.updateSliderColor();
  }

  /**
   * Update the percentage of slider color
   * @private
   */
  private updateSliderColor(): void {
    if (!this.leftColor || !this.rightColor) {
      return;
    }

    const max = Number(this.slider.nativeElement.max) || 100;
    const min = Number(this.slider.nativeElement.min) || 0;

    // Calculate visible width
    const diff = max - min;
    const val = (((this.control.value ?? diff / 2) - min) * 100) / diff;
    this.slider.nativeElement.style.setProperty('--range-percentage', `${val}%`);
  }
}
