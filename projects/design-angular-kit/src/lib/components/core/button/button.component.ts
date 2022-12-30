import {Component, ContentChildren, Input, QueryList, ViewEncapsulation} from '@angular/core';
import {ButtonColor, ButtonSize, ButtonType} from '../../../interfaces/core';
import {BooleanInput, isTrueBooleanInput} from '../../../utils/boolean-input';
import {IconComponent} from '../../utils/icon/icon.component';
import {AbstractComponent} from '../../../abstracts/abstract.component';

@Component({
  selector: 'it-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent extends AbstractComponent {

  /**
   * Button color
   */
  @Input() color?: ButtonColor;

  /**
   * Button size
   */
  @Input() size?: ButtonSize;

  /**
   * Button type
   * @default button
   */
  @Input() type: ButtonType = 'button';

  /**
   * Add the btn-icon class
   * If an icon is found in the button it will automatically apply the btn-icon class, use false to remove the automatism
   */
  @Input() btnIcon?: BooleanInput;

  /**
   * If button is disabled
   */
  @Input() disabled?: BooleanInput;

  /**
   * Custom class
   */
  @Input() class?: string;

  /**
   * The icon children
   */
  @ContentChildren(IconComponent) icons?: QueryList<IconComponent>;

  get isDisabled(): boolean {
    return isTrueBooleanInput(this.disabled);
  }

  get buttonClass(): string {
    let btnClass = 'btn';
    if (this.color) {
      btnClass += ` btn-${this.color}`;
    }

    if (this.size) {
      btnClass += ` btn-${this.size}`;
    }

    if (isTrueBooleanInput(this.btnIcon) || (this.icons?.length && this.btnIcon === undefined)) {
      btnClass += ` btn-icon`;
    }

    if (this.isDisabled) {
      btnClass += ` disabled`;
    }

    if (this.class) {
      btnClass += ` ${this.class}`;
    }

    return btnClass;
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'class');
  }
}
