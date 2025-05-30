import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { IconColor, IconName, IconSize } from '../../../interfaces/icon';
import { inputToBoolean } from '../../../utils/coercion';
import { IT_ASSET_BASE_PATH } from '../../../interfaces/design-angular-kit-config';

@Component({
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
   * Title of the icon
   */
  @Input() title: string | undefined;

  /**
   * Custom Waria label
   */
  @Input() labelWaria: string | undefined;

  /**
   * Return the icon href
   */
  protected get iconHref(): string {
    return `${this.assetBasePath}/dist/svg/sprites.svg#it-${this.name}`;
  }

  /**
   * Return the icon class
   */
  protected get iconClass(): string {
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

  /**
   * The bootstrap-italia asset folder path
   * @default ./bootstrap-italia
   */
  protected assetBasePath: string;

  get isAriaHidden(): boolean {
    return this.labelWaria == undefined && this.title == undefined;
  }

  get role(): string | null {
    return this.labelWaria == undefined && this.title == undefined ? null : 'img';
  }

  constructor() {
    this.assetBasePath = inject(IT_ASSET_BASE_PATH);
  }
}
