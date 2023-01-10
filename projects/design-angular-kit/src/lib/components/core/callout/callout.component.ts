import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {CalloutAppearance, CalloutColor} from "../../../interfaces/core";

@Component({
  selector: 'it-callout',
  templateUrl: './callout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalloutComponent {

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

}
