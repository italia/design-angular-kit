import { Directive, HostBinding, Input } from '@angular/core';

export type TextTransformValue = 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';

/**
 * Directive that applies a CSS `text-transform` value to the host element.
 *
 * Fills the gap where Bootstrap Italia provides `.text-lowercase`, `.text-uppercase`,
 * and `.text-capitalize` utility classes but omits `.text-none`.
 *
 * @example
 * ```html
 * <p itTextTransform="none">No transform applied</p>
 * <p itTextTransform="uppercase">UPPERCASED TEXT</p>
 * ```
 */
@Directive({
  selector: '[itTextTransform]',
  standalone: true,
})
export class ItTextTransformDirective {
  @Input('itTextTransform') value: TextTransformValue = 'none';

  @HostBinding('style.text-transform')
  get textTransform(): string {
    return this.value || 'none';
  }
}
