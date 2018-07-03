import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Inject,
  Input,
  Optional,
  ViewEncapsulation
} from '@angular/core';

let progressbarId = 0;

/**
 * Una barra di avanzamento con design bootstrap italia.
 * Una `<it-progress-bar>` può essere.
 */
@Component({
  selector: 'it-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {
  readonly bgColors: string[] = ['bg-success', 'bg-info', 'bg-warning', 'bg-danger'];

  protected progressbarId = `it-progress-bar-${progressbarId++}`;

  /**
   * L'altezza della barra di avanzamento.
   */
  @Input()
  get height(): number { return this._height; }
  set height(v: number) { this._height = v; }
  protected _height = 20;

  /**
   * Il valore minimo della barra di avanzamento.
   */
  @Input()
  get min(): number { return this._min; }
  set min(v: number) { this._min = Math.round(v); }
  protected _min = 0;

  /**
   * Il valore massimo della barra di avanzamento.
   */
  @Input()
  get max(): number { return this._max; }
  set max(v: number) { this._max = Math.round(v); }
  protected _max = 100;

  /**
   * L'attuale valore della barra di avanzamento.
   */
  @Input()
  get value(): number { return this._value; }
  set value(v: number) { this._value = Math.min(Math.max(v, this._min), this._max); }
  protected _value = 0;

  /**
   * L'etichetta della barra di avanzamento.
   */
  @Input()
  get label(): string { return this._label; }
  set label(v: string) { this._label = v; }
  protected _label = '';

  /**
   * Il colore della barra di avanzamento.
   */
  @Input()
  protected bgColor = '';

  protected pgStyle() {
    const manWidth = ((this.value - this.min) * 100) / (this.max - this.min);
    return { 'width' : manWidth + '%' };
  }

  protected pgClass() {
    const progressbarClass = { 'progress-bar' : true };
    if (this.bgColors.indexOf(this.bgColor) > -1) {
      progressbarClass[this.bgColor] = true;
    }
    return progressbarClass;
  }

  constructor() { }

}
