import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconName } from '../../../interfaces/icon';

export type ChipColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

@Component({
  selector: 'it-chip',
  templateUrl: './chip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent {

  /**
   * Indica la label
  */
  @Input() set label (value: string) { this._label = value; }
  get label (): string { return this._label; }
  private _label = '';

  /**
   * Indica se mostrate il pulante di chisura
  */
  @Input() set showCloseButton (value: boolean) { this._showCloseButton = value; }
  get showCloseButton (): boolean { return this._showCloseButton; }
  private _showCloseButton = false;

  /**
   * Indica il size
  */
  @Input() set size (value: '' | 'lg') { this._size = value; }
  get size (): '' | 'lg' { return this._size; }
  private _size: '' | 'lg'  = '';

  /**
   * Indica il colore della chip
  */
  @Input() set color (value: ChipColor | undefined) { this._color = value; }
  get color (): ChipColor | undefined { return this._color; }
  private _color: ChipColor | undefined  = undefined;

  /**
   * Indica se la chip è disabilitata
  */
  @Input() set disabled (value: boolean) { this._disabled = value; }
  get disabled (): boolean { return this._disabled; }
  private _disabled: boolean  = undefined;

  iconClose: IconName = 'close';
}
