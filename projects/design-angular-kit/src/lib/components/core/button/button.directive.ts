import { ContentChildren, Directive, Host, HostBinding, HostListener, Input, Optional, QueryList } from '@angular/core';
import { ButtonColor, ButtonSize } from '../../../interfaces/core';
import { ItIconComponent } from '../../utils/icon/icon.component';
import { ItProgressButtonComponent } from '../progress-button/progress-button.component';
import { inputToBoolean } from '../../../utils/coercion';

/**
 * Button
 * @description Bootstrap italia custom button styles
 */
@Directive({
  standalone: true,
  selector: '[itButton]',
  exportAs: 'itButton'
})
export class ItButtonDirective {

  /**
   * Button color
   * @default undefined
   */
  @Input('itButton') color: ButtonColor | undefined;

  /**
   * Button size
   * @default undefined
   */
  @Input() size: ButtonSize | undefined;

  /**
   * Indicates whether the button occupies all the width available to it.
   * @default undefined
   */
  @Input() block: ButtonSize | undefined;

  /**
   * If button is disabled
   * @default false
   */
  @Input({transform: inputToBoolean}) @HostBinding('disabled') disabled?: boolean;

  /**
   * The icon children
   * @default undefined
   */
  @ContentChildren(ItIconComponent) protected icons?: QueryList<ItIconComponent>;

  private isFocus = false;

  constructor(
    @Optional() @Host() private progressButtonComponent: ItProgressButtonComponent
  ) {
  }

  @HostListener('focus')
  protected onFocus() {
    this.isFocus = true;
  }

  @HostListener('blur')
  protected onBlur() {
    this.isFocus = false;
  }

  @HostBinding('class')
  protected get hostClasses(): string {
    let cssClass = 'btn';

    if (this.color) {
      cssClass += ` btn-${this.color}`;
    }

    if (this.size) {
      cssClass += ` btn-${this.size}`;
    }

    if (this.block) {
      cssClass += ' btn-block';
    }

    if (this.disabled) {
      cssClass += ' disabled';
    }

    if (this.isFocus) {
      cssClass += ' focus--mouse';
    }

    if (this.icons?.length && !this.progressButtonComponent) {
      cssClass += ' btn-icon';
    }

    if (this.progressButtonComponent) {
      cssClass += ' btn-progress';
    }

    return cssClass;
  }

}
