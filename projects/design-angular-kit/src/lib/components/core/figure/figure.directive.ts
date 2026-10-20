import { Directive } from '@angular/core';

/**
 * Directive that automatically applies the `.figure` CSS class to the host
 * element, so consumers do not need to add it manually.
 *
 * Usage:
 * ```html
 * <it-figure>
 *   <img src="..." alt="..." />
 *   <figcaption class="figure-caption">Caption text</figcaption>
 * </it-figure>
 * ```
 *
 * Fixes #543.
 */
@Directive({
  standalone: true,
  selector: 'it-figure',
  host: { class: 'figure' },
})
export class ItFigureDirective {}
