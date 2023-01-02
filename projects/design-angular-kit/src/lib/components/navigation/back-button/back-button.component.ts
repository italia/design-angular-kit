import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  exportAs: 'itBackButton'
})
export class BackButtonComponent {

  /**
   * Back button style
   * - <b>link</b>: use a link with icon and text
   * - <b>button</b>: use a button with icon and text
   * @default link
   */
  @Input() buttonStyle: 'link' | 'button' = 'button';

  /**
   * Button direction
   * - <b>left</b>: Back direction
   * - <b>up</b>: Upper direction
   * @default left
   */
  @Input() direction: 'left' | 'up' = 'left';

  /**
   * Show/Hide icon
   * @default true
   */
  @Input() showIcon: BooleanInput = true;

  /**
   * Show/Hide text
   * @default true
   */
  @Input() showText: BooleanInput = true;

  /**
   * Custom back logic <br/>
   *
   * NOTE: to use 'this' need bind function  <br/>
   * @example backCbFn = this.errorCallback.bind(this);
   * (errorCallback is your function, pass backCbFn to the component)
   */
  @Input() backFn?: (location: Location) => void;

  get isShowIcon(): boolean {
    return isTrueBooleanInput(this.showIcon);
  }

  get isShowText(): boolean {
    return isTrueBooleanInput(this.showText);
  }

  constructor(
    public readonly _location: Location
  ) {
  }

  /**
   * Go back function
   */
  public goBack(): void {
    if (this.backFn) {
      return this.backFn(this._location);
    }

    this._location.back();
  }
}
