import { Directive, HostBinding, Input } from '@angular/core';

type OverflowValue = 'auto' | 'hidden' | 'visible' | 'scroll' | 'clip';

/**
 * Directive to control `overflow-x` and `overflow-y` independently.
 *
 * Fills the gap left by Bootstrap Italia's built-in overflow utilities
 * which only expose composite `overflow` control (e.g. `.overflow-auto`),
 * with no axis-specific variants.
 *
 * @usageNotes
 *
 * ### Overflow-X only
 *
 * ```html
 * <div itOverflowX="auto">Scrolls horizontally when content overflows</div>
 * ```
 *
 * ### Overflow-Y only
 *
 * ```html
 * <div itOverflowY="hidden">Clips vertical overflow</div>
 * ```
 *
 * ### Both axes independently
 *
 * ```html
 * <div itOverflowX="auto" itOverflowY="hidden">
 *   Horizontal scroll, vertical clip
 * </div>
 * ```
 *
 * ### Accepted values
 *
 * `'auto'` | `'hidden'` | `'visible'` | `'scroll'` | `'clip'`
 */
@Directive({
  standalone: true,
  selector: '[itOverflowX]',
  exportAs: 'itOverflowX',
})
export class ItOverflowXDirective {
  /**
   * Controls the `overflow-x` CSS property.
   *
   * Accepted values: `'auto'` | `'hidden'` | `'visible'` | `'scroll'` | `'clip'`
   */
  @Input({ required: true }) itOverflowX!: OverflowValue;

  @HostBinding('style.overflow-x')
  protected get overflowXStyle(): string {
    return this.itOverflowX;
  }
}

/**
 * Directive to control the `overflow-y` CSS property.
 *
 * @see {@link ItOverflowXDirective} for usage examples.
 */
@Directive({
  standalone: true,
  selector: '[itOverflowY]',
  exportAs: 'itOverflowY',
})
export class ItOverflowYDirective {
  /**
   * Controls the `overflow-y` CSS property.
   *
   * Accepted values: `'auto'` | `'hidden'` | `'visible'` | `'scroll'` | `'clip'`
   */
  @Input({ required: true }) itOverflowY!: OverflowValue;

  @HostBinding('style.overflow-y')
  protected get overflowYStyle(): string {
    return this.itOverflowY;
  }
}
