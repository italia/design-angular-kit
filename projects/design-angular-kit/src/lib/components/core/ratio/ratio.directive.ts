import { Directive, HostBinding, Input } from '@angular/core';

/** Supported aspect-ratio keys matching bootstrap-italia's $aspect-ratios map. */
export type RatioSize = '1x1' | '3x2' | '4x3' | '16x9' | '21x9';

/**
 * Attribute directive that automatically applies the base `.ratio` class
 * together with the requested `.ratio-{size}` variant.
 *
 * Usage:
 * ```html
 * <div itRatio="16x9">
 *   <iframe src="..."></iframe>
 * </div>
 * ```
 *
 * Produces `class="ratio ratio-16x9"` on the host element.
 *
 * Fixes #544.
 */
@Directive({
  standalone: true,
  selector: '[itRatio]',
  exportAs: 'itRatio',
})
export class ItRatioDirective {
  @Input('itRatio') size: RatioSize | undefined;

  @HostBinding('class')
  protected get ratioClass(): string {
    let css = 'ratio';
    if (this.size) {
      css += ` ratio-${this.size}`;
    }
    return css;
  }
}
