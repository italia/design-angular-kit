import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit } from '@angular/core';

/**
 * A standalone divider component that renders a Bootstrap Italia
 * `<span class="divider">` separator.
 *
 * Can be used inside dropdown menus, lists, or any container that
 * needs a visual separator between items.
 *
 * ### Usage
 *
 * **As a custom element (inside a `<ul>`):**
 * ```html
 * <ul>
 *   <li itDropdownItem>Item 1</li>
 *   <it-divider></it-divider>
 *   <li itDropdownItem>Item 2</li>
 * </ul>
 * ```
 *
 * **As an attribute on `<li>`:**
 * ```html
 * <ul>
 *   <li itDropdownItem>Item 1</li>
 *   <li itDivider></li>
 *   <li itDropdownItem>Item 2</li>
 * </ul>
 * ```
 */
@Component({
  selector: 'it-divider, li[itDivider]',
  template: `
    @if (isHostLi) {
      <span class="divider"></span>
    } @else {
      <li><span class="divider"></span></li>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItDividerComponent implements OnInit {
  /** @internal */
  isHostLi = false;

  private readonly elementRef = inject(ElementRef);

  ngOnInit(): void {
    this.isHostLi = this.elementRef.nativeElement.tagName.toLowerCase() === 'li';
  }
}
