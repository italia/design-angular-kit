import { Injectable, OnDestroy, signal, computed } from '@angular/core';

export type BootstrapBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const BREAKPOINTS: { name: BootstrapBreakpoint; minWidth: number }[] = [
  { name: 'xxl', minWidth: 1400 },
  { name: 'xl', minWidth: 1200 },
  { name: 'lg', minWidth: 992 },
  { name: 'md', minWidth: 768 },
  { name: 'sm', minWidth: 576 },
  { name: 'xs', minWidth: 0 },
];

/**
 * Service that exposes Angular Signals reflecting the current Bootstrap Italia
 * viewport breakpoint. Uses `window.matchMedia` for efficient, listener-based
 * breakpoint detection without polling.
 *
 * @example
 * ```ts
 * @Component({ ... })
 * export class MyComponent {
 *   private breakpointService = inject(ItBreakpointService);
 *   currentBreakpoint = this.breakpointService.currentBreakpoint;
 *   isDesktop = this.breakpointService.isAbove('lg');
 * }
 * ```
 */
@Injectable({ providedIn: 'root' })
export class ItBreakpointService implements OnDestroy {
  private readonly _currentBreakpoint = signal<BootstrapBreakpoint>('xs');
  private readonly _mediaQueries: { mql: MediaQueryList; handler: (e: MediaQueryListEvent) => void }[] = [];

  /** Signal emitting the current Bootstrap breakpoint name. */
  readonly currentBreakpoint = this._currentBreakpoint.asReadonly();

  /** Signal emitting the min-width in pixels for the current breakpoint. */
  readonly currentMinWidth = computed(() => {
    const bp = this._currentBreakpoint();
    return BREAKPOINTS.find(b => b.name === bp)?.minWidth ?? 0;
  });

  constructor() {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    for (const bp of BREAKPOINTS) {
      if (bp.minWidth === 0) continue; // xs has no media query — it's the fallback

      const mql = window.matchMedia(`(min-width: ${bp.minWidth}px)`);
      const handler = () => this._recalculate();
      mql.addEventListener('change', handler);
      this._mediaQueries.push({ mql, handler });
    }

    this._recalculate();
  }

  ngOnDestroy(): void {
    for (const { mql, handler } of this._mediaQueries) {
      mql.removeEventListener('change', handler);
    }
    this._mediaQueries.length = 0;
  }

  /**
   * Returns a computed Signal that is `true` when the viewport is at or above
   * the given breakpoint.
   */
  isAbove(breakpoint: BootstrapBreakpoint) {
    const threshold = BREAKPOINTS.find(b => b.name === breakpoint)?.minWidth ?? 0;
    return computed(() => this.currentMinWidth() >= threshold);
  }

  /**
   * Returns a computed Signal that is `true` when the viewport is below
   * the given breakpoint.
   */
  isBelow(breakpoint: BootstrapBreakpoint) {
    const threshold = BREAKPOINTS.find(b => b.name === breakpoint)?.minWidth ?? 0;
    return computed(() => this.currentMinWidth() < threshold);
  }

  private _recalculate(): void {
    for (const bp of BREAKPOINTS) {
      if (bp.minWidth === 0) {
        this._currentBreakpoint.set('xs');
        return;
      }
      const mql = this._mediaQueries.find(q => q.mql.media === `(min-width: ${bp.minWidth}px)`);
      if (mql?.mql.matches) {
        this._currentBreakpoint.set(bp.name);
        return;
      }
    }
    this._currentBreakpoint.set('xs');
  }
}
