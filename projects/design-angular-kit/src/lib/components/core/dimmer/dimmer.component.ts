import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type DimmerColor = '' | 'dimmer-primary';

@Component({
  selector: 'it-dimmer',
  templateUrl: './dimmer.component.html',
  styleUrls: ['./dimmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('150ms', style({ opacity: 0.92 })),
        ]),
        transition(':leave', [
            animate('150ms', style({ opacity: 0 })),
        ]),
    ])
]
})
export class DimmerComponent {

  /**
   * Dimmer status
   * @default false
  */
  @Input() set active (value: boolean) {this._active = value};
  get active() {return this._active; }
  private _active = false;

  /**
   * Colore del dimmer
   * @default ''
  */
  @Input() set color (value: DimmerColor) {this._color = value};
  get color() {return this._color; }
  private _color: DimmerColor = '';

  /**
   * Testo da visualizzare (se vuoto non verrà mostrato alcun testo)
   * @default ''
  */
  @Input() set text (value: string) {this._text = value};
  get text() {return this._text; }
  private _text = '';

  /**
   * Titolo da visualizzare (se vuoto non verrà mostrato alcun titolo)
   * @default ''
  */
  @Input() set title (value: string) {this._title = value};
  get title() {return this._title; }
  private _title = '';

  /**
   * Indica se abbiamo 1 solo bottone
   * @default false
  */
  @Input() set hasOneButton (value: boolean) {this._hasOneButton = value};
  get hasOneButton() {return this._hasOneButton; }
  private _hasOneButton = false;
}
