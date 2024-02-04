import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { IconColor, IconName, IconSize } from '../../../interfaces/icon';
import { DESIGN_ANGULAR_KIT_CONFIG, DesignAngularKitConfig } from '../../../design-angular-kit-config';
import { inputToBoolean } from '../../../utils/coercion';

@Component({
  standalone: true,
  selector: 'it-icon',
  templateUrl: './icon.component.html',
  styles: ':host {display: contents;}',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItIconComponent {
  /**
   * The icon name
   */
  @Input({ required: true }) name!: IconName;

  /**
   * The icon size
   */
  @Input() size: IconSize | undefined;

  /**
   * The icon color
   */
  @Input() color: IconColor | undefined;

  /**
   * Create a padding proportional to the size of the surrounding icon.
   * @default false
   */
  @Input({ transform: inputToBoolean }) padded?: boolean;

  /**
   * Custom class of svg
   */
  @Input() svgClass: string | undefined;

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
    if (this.padded) {
      iconClass += ` icon-padded`;
    }
    if (this.svgClass) {
      iconClass += ` ${this.svgClass}`;
    }
    return iconClass;
  }

  constructor(@Inject(DESIGN_ANGULAR_KIT_CONFIG) private readonly config: DesignAngularKitConfig) {}
}
