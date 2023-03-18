import { ContentChildren, Directive, Host, HostBinding, HostListener, Input, Optional, QueryList } from '@angular/core';
import { ButtonColor, ButtonSize } from '../../../interfaces/core';
import { IconComponent } from '../../utils/icon/icon.component';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { ProgressButtonComponent } from '../progress-button/progress-button.component';

/**
 * Button
 * @description Bootstrap italia custom button styles
 */
@Directive({
  selector: '[itButton]',
  exportAs: 'itButton'
})
export class ButtonDirective {

  /**
   * Button color
   * @default undefined
   */
  @Input('itButton') color?: ButtonColor;

  /**
   * Button size
   * @default undefined
   */
  @Input() size?: ButtonSize;

  /**
   * Indicates whether the button occupies all the width available to it.
   * @default undefined
   */
  @Input() block?: ButtonSize;

  /**
   * If button is disabled
   * @default false
   */
  @Input() @HostBinding('disabled') disabled?: BooleanInput;

  /**
   * The icon children
   * @default undefined
   */
  @ContentChildren(IconComponent) protected icons?: QueryList<IconComponent>;

  private isFocus = false;

  constructor(
    @Optional() @Host() private progressButtonComponent: ProgressButtonComponent
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

    if (isTrueBooleanInput(this.disabled)) {
      cssClass += ' disabled';
    }

    if (this.isFocus) {
      cssClass += ' focus--mouse';
    }

    if (this.icons?.length && !this.progressButtonComponent) {
      cssClass += ' btn-icon';
    }

    if (!!this.progressButtonComponent) {
      cssClass += ' btn-progress';
    }

    return cssClass;
  }

}
