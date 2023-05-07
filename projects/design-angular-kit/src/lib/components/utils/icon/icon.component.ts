import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { IconColor, IconName, IconSize } from '../../../interfaces/icon';
import { BooleanInput, isTrueBooleanInput } from '../../../utils/boolean-input';
import { DESIGN_ANGULAR_KIT_CONFIG, DesignAngularKitConfig } from '../../../design-angular-kit-config';

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
    return `${this.config.iconHref}#it-${this.name}`;
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
    if (isTrueBooleanInput(this.padded)) {
      iconClass += ` icon-padded`;
    }
    if (this.svgClass) {
      iconClass += ` ${this.svgClass}`;
    }
    return iconClass;
  }

  constructor(
    @Inject(DESIGN_ANGULAR_KIT_CONFIG) private readonly config: DesignAngularKitConfig
  ) {
  }
}
