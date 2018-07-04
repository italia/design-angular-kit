import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Inject,
  Input,
  Optional,
  ViewEncapsulation
} from '@angular/core';

const BG_DEFAULT = undefined;
const BG_DANGER = 'bg-danger';
const BG_INFO = 'bg-info';
const BG_WARNING = 'bg-warning';
const BG_SUCCESS = 'bg-success';

export type ProgressBarBackgroundClass = undefined | 'bg-danger' | 'bg-warning' | 'bg-info' | 'bg-success';

export interface ProgressBarBackgroundClasses {
  readonly BG_DEFAULT: ProgressBarBackgroundClass;
  readonly BG_DANGER: ProgressBarBackgroundClass;
  readonly BG_INFO: ProgressBarBackgroundClass;
  readonly BG_WARNING: ProgressBarBackgroundClass;
  readonly BG_SUCCESS: ProgressBarBackgroundClass;
}

export const PROGRESS_BAR_BACKGROUND_CLASSES: ProgressBarBackgroundClasses = {
  BG_DEFAULT: BG_DEFAULT,
  BG_DANGER: BG_DANGER,
  BG_INFO: BG_INFO,
  BG_WARNING: BG_WARNING,
  BG_SUCCESS: BG_SUCCESS,
};

let progressbarId = 0;

/**
 * Una barra di avanzamento con design bootstrap italia.
 */
@Component({
  selector: 'it-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {

  public static readonly PROGRESS_BAR_DEFAULT_MIN = 0;
  public static readonly PROGRESS_BAR_DEFAULT_MAX = 100;
  public static readonly PROGRESS_BAR_DEFAULT_VALUE = 0;
  public static readonly PROGRESS_BAR_DEFAULT_HEIGHT = 20;
  public static readonly PROGRESS_BAR_DEFAULT_LABEL = '';
  public static readonly PROGRESS_BAR_DEFAULT_BG = BG_DEFAULT;

  protected progressbarId = `it-progress-bar-${progressbarId++}`;

  /**
   * L'altezza della barra di avanzamento.
   */
  @Input()
  get height(): number { return this._height; }
  set height(v: number) { this._height = v; }
  protected _height = ProgressBarComponent.PROGRESS_BAR_DEFAULT_HEIGHT;

  /**
   * Il valore minimo della barra di avanzamento.
   */
  @Input()
  get min(): number { return this._min; }
  set min(v: number) { this._min = Math.round(v); }
  protected _min = ProgressBarComponent.PROGRESS_BAR_DEFAULT_MIN;

  /**
   * Il valore massimo della barra di avanzamento.
   */
  @Input()
  get max(): number { return this._max; }
  set max(v: number) { this._max = Math.round(v); }
  protected _max = ProgressBarComponent.PROGRESS_BAR_DEFAULT_MAX;

  /**
   * L'attuale valore della barra di avanzamento.
   */
  @Input()
  get value(): number { return this._value; }
  set value(v: number) { this._value = Math.min(Math.max(v, this._min), this._max); }
  protected _value = ProgressBarComponent.PROGRESS_BAR_DEFAULT_VALUE;

  /**
   * L'etichetta della barra di avanzamento.
   */
  @Input()
  get label(): string { return this._label; }
  set label(v: string) { this._label = v; }
  protected _label = ProgressBarComponent.PROGRESS_BAR_DEFAULT_LABEL;

  /**
   * Il colore della barra di avanzamento.
   */
  @Input()
  get bgColor(): ProgressBarBackgroundClass { return this._bgColor; }
  set bgColor(v: ProgressBarBackgroundClass) { this._bgColor = v; }
  protected _bgColor: ProgressBarBackgroundClass = ProgressBarComponent.PROGRESS_BAR_DEFAULT_BG;

  public valuePercentage(): number {
    return ((this.value - this.min) * 100) / (this.max - this.min);
  }

  protected pgStyle() {
    return { 'width' : this.valuePercentage() + '%' };
  }

  protected pgClass() {
    const progressbarClass = { 'progress-bar' : true };
    if (this.bgColor) {
      progressbarClass[this.bgColor] = true;
    }
    return progressbarClass;
  }

  constructor() { }

}
