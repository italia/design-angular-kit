import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconColor, IconName, IconSize } from '../../../interfaces/icon';
import { BooleanInput } from '../../../utils/boolean-input';

@Component({
  selector: 'it-icon[name]',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {

  /**
   * The icon name
   */
  @Input() name!: IconName;

  /**
   * The icon size
   */
  @Input() size?: IconSize;

  /**
   * The icon color
   */
  @Input() color?: IconColor;

  /**
   * Create a padding proportional to the size of the surrounding icon.
   */
  @Input() padded?: BooleanInput;

  /**
   * Custom class of svg
   */
  @Input() svgClass?: string;

  /**
   * Return the icon href
   */
  get iconHref(): string {
    return `/bootstrap-italia/dist/svg/sprites.svg#it-${this.name}`;
  }

  /**
   * Return the icon class
   */
  get iconClass(): string {
    let iconClass = 'icon';
    if (this.size) {
      iconClass += ` icon-${this.size}`;
    }
    if (this.color) {
      iconClass += ` icon-${this.color}`;
    }
    if (this.svgClass) {
      iconClass += ` ${this.svgClass}`;
    }
    return iconClass;
  }

}
