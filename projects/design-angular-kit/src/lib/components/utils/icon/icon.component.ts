import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IconColor, IconName, IconSize } from '../../../interfaces/icon';
import { inputToBoolean } from '../../../utils/coercion';
import { IT_ASSET_BASE_PATH } from '../../../interfaces/design-angular-kit-config';
import { ItIconRegistryService } from '../../../services/icon-registry/icon-registry.service';

@Component({
  selector: 'it-icon',
  templateUrl: './icon.component.html',
  styles: ':host {display: contents;}',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ItIconComponent {
  /**
   * The icon name.
   *
   * Accepts built-in Bootstrap Italia icon names (e.g. `'arrow-down'`, `'search'`)
   * or custom icon names registered via `ItIconRegistryService`.
   *
   * Custom icons registered in the registry take precedence over built-in sprite icons.
   */
  @Input({ required: true }) name!: IconName | string;

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

  private readonly iconRegistry = inject(ItIconRegistryService);

  /**
   * Whether the icon is a custom inline SVG from the registry.
   */
  protected get isCustomInlineSvg(): boolean {
    return this.iconRegistry.getIconSvg(this.name) !== undefined;
  }

  /**
   * The sanitized inline SVG content for custom icons.
   */
  protected get customSvgContent(): SafeHtml | undefined {
    return this.iconRegistry.getIconSvg(this.name);
  }

  /**
   * Return the icon href — either from a custom sprite registration or the built-in sprite.
   */
  protected get iconHref(): string {
    const customSpriteHref = this.iconRegistry.getIconSpriteHref(this.name);
    if (customSpriteHref) {
      return customSpriteHref;
    }
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
