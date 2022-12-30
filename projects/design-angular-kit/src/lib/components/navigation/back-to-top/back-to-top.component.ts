import {Component, Input} from '@angular/core';
import {BooleanInput, isTrueBooleanInput} from "../../../utils/boolean-input";
import {AbstractComponent} from "../../../abstracts/abstract.component";

@Component({
  selector: 'it-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent extends AbstractComponent {

  /**
   * The back to top ID
   * @default 'back-to-top-button'
   */
  @Input() override id: string = 'back-to-top-button';

  /**
   * Show small button
   */
  @Input() small?: BooleanInput;

  /**
   * Show shadow
   */
  @Input() shadow?: BooleanInput;

  /**
   * Button usable button on a dark background
   */
  @Input() dark?: BooleanInput;

  get isSmall(): boolean {
    return isTrueBooleanInput(this.small);
  }

  get isShadow(): boolean {
    return isTrueBooleanInput(this.shadow);
  }

  get isDark(): boolean {
    return isTrueBooleanInput(this.dark);
  }
}
