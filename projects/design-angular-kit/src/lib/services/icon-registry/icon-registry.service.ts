import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Registry for custom SVG icons used by `<it-icon>`.
 *
 * Allows registering custom SVG icons by name so they can be rendered
 * using `<it-icon name="my-custom-icon">` alongside the built-in
 * Bootstrap Italia sprite icons.
 *
 * Custom icons take precedence over built-in sprite icons when names collide.
 *
 * @usageNotes
 *
 * ### Register inline SVG content
 *
 * ```typescript
 * const registry = inject(ItIconRegistryService);
 * registry.registerIcon('home', '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>');
 * ```
 *
 * ### Register from an external sprite
 *
 * ```typescript
 * registry.registerIconFromSprite('custom-star', '/assets/custom-sprites.svg', 'star-icon');
 * ```
 *
 * ### Use in template
 *
 * ```html
 * <it-icon name="home"></it-icon>
 * <it-icon name="custom-star" size="lg"></it-icon>
 * ```
 */
@Injectable({ providedIn: 'root' })
export class ItIconRegistryService {
  private readonly icons = new Map<string, SafeHtml>();
  private readonly spriteRefs = new Map<string, string>();
  private readonly sanitizer = inject(DomSanitizer);

  /**
   * Register a custom icon with inline SVG content.
   *
   * Only the inner SVG content (paths, shapes, groups) should be provided.
   * The outer `<svg>` wrapper with accessibility attributes and CSS classes
   * is managed by the `<it-icon>` component.
   *
   * @param name unique icon name (without the `it-` prefix)
   * @param svgContent raw SVG markup string (inner content only)
   */
  registerIcon(name: string, svgContent: string): void {
    this.icons.set(name, this.sanitizer.bypassSecurityTrustHtml(svgContent));
  }

  /**
   * Register multiple custom icons at once.
   *
   * @param icons record mapping icon names to SVG content strings
   */
  registerIcons(icons: Record<string, string>): void {
    for (const [name, svgContent] of Object.entries(icons)) {
      this.registerIcon(name, svgContent);
    }
  }

  /**
   * Register a custom icon from an external SVG sprite file.
   *
   * The icon will be rendered using `<use href="...">` pointing to
   * the specified sprite URL and fragment ID.
   *
   * @param name unique icon name (without the `it-` prefix)
   * @param spriteUrl URL of the sprite SVG file
   * @param fragmentId the symbol/fragment ID within the sprite
   */
  registerIconFromSprite(name: string, spriteUrl: string, fragmentId: string): void {
    this.spriteRefs.set(name, `${spriteUrl}#${fragmentId}`);
  }

  /**
   * Check whether a custom icon (inline or sprite) is registered for the given name.
   */
  hasIcon(name: string): boolean {
    return this.icons.has(name) || this.spriteRefs.has(name);
  }

  /**
   * Get the inline SVG content for a registered icon.
   * Returns `undefined` if the icon is not registered as inline SVG.
   */
  getIconSvg(name: string): SafeHtml | undefined {
    return this.icons.get(name);
  }

  /**
   * Get the sprite href for a registered sprite icon.
   * Returns `undefined` if the icon is not registered as a sprite reference.
   */
  getIconSpriteHref(name: string): string | undefined {
    return this.spriteRefs.get(name);
  }

  /**
   * Remove a previously registered custom icon.
   *
   * @returns `true` if the icon was found and removed, `false` otherwise.
   */
  removeIcon(name: string): boolean {
    return this.icons.delete(name) || this.spriteRefs.delete(name);
  }

  /**
   * Remove all registered custom icons.
   */
  clear(): void {
    this.icons.clear();
    this.spriteRefs.clear();
  }
}
