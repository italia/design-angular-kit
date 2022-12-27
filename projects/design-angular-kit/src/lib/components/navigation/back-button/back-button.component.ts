import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'it-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  exportAs: 'itUploadDragDrop'
})
export class BackButtonComponent {

  /**
   * Back button style
   * - <strong>link</strong>: use a link with icon and text
   * - <strong>button</strong>: use a button with icon and text
   * - <strong>icon</strong>: use a button with icon
   * @default link
   */
  @Input() buttonStyle: 'link' | 'button' | 'icon' = 'link';

  /**
   * Icon direction
   * @default left
   */
  @Input() iconDirection: 'left' | 'up' = 'left';

  /**
   * Custom back logic <br/>
   *
   * NOTE: to use 'this' need bind function  <br/>
   * @example backCbFn = this.errorCallback.bind(this);
   * (errorCallback is your function, pass backCbFn to the component)
   */
  @Input() backFn?: (location: Location) => void;

  constructor(
    private readonly _location: Location
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
