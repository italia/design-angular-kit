import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

export type DimmerColor = '' | 'dimmer-primary';

@Component({
  standalone: true,
  selector: 'it-dimmer',
  templateUrl: './dimmer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition(':enter', [style({ opacity: 0 }), animate('150ms', style({ opacity: 0.9 }))]),
      transition(':leave', [animate('150ms', style({ opacity: 0 }))]),
    ]),
  ],
  imports: [NgClass],
})
export class ItDimmerComponent implements OnInit {
  /**
   * Dimmer status
   * @default false
   */
  @Input() set active(value: boolean) {
    this._active = value;
  }
  get active() {
    return this._active;
  }
  private _active = false;

  /**
   * Colore del dimmer
   * @default ''
   */
  @Input() set color(value: DimmerColor) {
    this._color = value;
  }
  get color() {
    return this._color;
  }
  private _color: DimmerColor = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef?.nativeElement?.parentElement?.classList?.add('dimmable');
  }
}
