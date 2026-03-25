import { Directive, HostBinding, Input } from '@angular/core';

/** Bootstrap Italia spacer scale (0-5). */
export type GapScale = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Maps Bootstrap Italia spacer scale values (0-5) to their actual
 * CSS sizes following the $spacer variable ($spacer = 1rem = 16px).
 */
const SPACER_MAP: Record<GapScale, string> = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '1.5rem',
  5: '3rem',
};

/**
 * Directive that applies the CSS `gap` property to the host element.
 *
 * Bootstrap Italia's `.g-*` classes only set CSS variables consumed by `.row`.
 * This directive applies real CSS `gap`, making it usable on any flex or grid container.
 *
 * @example
 * ```html
 * <div class="d-flex" [itGap]="3">...</div>
 * ```
 */
@Directive({
  selector: '[itGap]',
  standalone: true,
})
export class ItGapDirective {
  @Input('itGap') value: GapScale = 0;

  @HostBinding('style.gap')
  get gap(): string {
    return SPACER_MAP[this.value] ?? '0';
  }
}

/**
 * Directive that applies the CSS `column-gap` property to the host element.
 *
 * @example
 * ```html
 * <div class="d-flex" [itGapX]="2">...</div>
 * ```
 */
@Directive({
  selector: '[itGapX]',
  standalone: true,
})
export class ItGapXDirective {
  @Input('itGapX') value: GapScale = 0;

  @HostBinding('style.column-gap')
  get columnGap(): string {
    return SPACER_MAP[this.value] ?? '0';
  }
}

/**
 * Directive that applies the CSS `row-gap` property to the host element.
 *
 * @example
 * ```html
 * <div class="d-flex flex-wrap" [itGapY]="4">...</div>
 * ```
 */
@Directive({
  selector: '[itGapY]',
  standalone: true,
})
export class ItGapYDirective {
  @Input('itGapY') value: GapScale = 0;

  @HostBinding('style.row-gap')
  get rowGap(): string {
    return SPACER_MAP[this.value] ?? '0';
  }
}
