import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {CalloutAppearance, CalloutColor} from "../../../interfaces/core";
import { IconName } from '../../../interfaces/icon';

@Component({
  selector: 'it-callout',
  templateUrl: './callout.component.html',
  styles: [`
    .callout-big-text:empty {
      display: none;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalloutComponent {

  /**
   * Callout label
   */
  @Input() set label (value: string | undefined) { this._label = value; }
  get label (): string | undefined { return this._label; }
  private _label: string | undefined = undefined;

  /**
   * Callout hiddenLabel
   */
  @Input() set hiddenLabel (value: string | undefined) { this._hiddenLabel = value; }
  get hiddenLabel (): string | undefined { return this._hiddenLabel; }
  private _hiddenLabel: string | undefined = undefined;

  /**
   * Callout color
   * - <b>success</b>
   * - <b>danger</b>
   * - <b>warning</b>
   * - <b>important</b>
   * - <b>note</b>
   */
  @Input() set color (value: CalloutColor | undefined) { this._color = value; }
  get color (): CalloutColor | undefined { return this._color; }
  private _color: CalloutColor | undefined = undefined;

  /**
   * Callout appearance
   * - <b>default</b>
   * - <b>highlight</b>: Callout version with border only on the left side
   * - <b>more</b>: It looks radically different from the other styles available and is suitable for more extensive texts
   * @default default
   */
  @Input() set appearance (value: CalloutAppearance) { this._appearance = value; }
  get appearance (): CalloutAppearance { return this._appearance; }
  private _appearance: CalloutAppearance = 'default';

  /**
   * Custom icon
   */
  @Input() set iconName (value: IconName | undefined) { this._iconName = value; }
  get iconName (): IconName | undefined {
    if (this._iconName) {
      return this._iconName;
    }

    if (this.appearance === 'more') {
      return 'zoom-in';
    }

    switch (this.color) {
      case 'success':
        return 'check-circle';
      case 'warning':
        return 'help-circle';
      case 'danger':
        return 'close-circle';
      case 'important':
      case 'note':
      default:
        return 'info-circle';
    }
  }
  private _iconName: IconName | undefined = undefined;

}
