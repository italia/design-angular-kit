import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Location, NgTemplateOutlet } from '@angular/common';
import { ItButtonDirective } from '../../core/button/button.directive';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  selector: 'it-back-button',
  templateUrl: './back-button.component.html',
  exportAs: 'itBackButton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, ItButtonDirective, ItIconComponent, TranslateModule],
})
export class ItBackButtonComponent {
  /**
   * Back button style
   * - <b>link</b>: use a link with icon and text
   * - <b>button</b>: use a button with icon and text
   * @default button
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
  @Input({ transform: inputToBoolean }) showIcon: boolean = true;

  /**
   * Show/Hide text
   * @default true
   */
  @Input({ transform: inputToBoolean }) showText: boolean = true;

  /**
   * Custom back logic <br/>
   *
   * NOTE: to use 'this' need bind function  <br/>
   * @example backCbFn = this.errorCallback.bind(this);
   * (errorCallback is your function, pass backCbFn to the component)
   */
  @Input() backFn?: (location: Location) => void;

  constructor(public readonly _location: Location) {}

  /**
   * Go back function
   */
  public goBack(event: Event): void {
    event.preventDefault();
    if (this.backFn) {
      return this.backFn(this._location);
    }

    this._location.back();
  }
}
