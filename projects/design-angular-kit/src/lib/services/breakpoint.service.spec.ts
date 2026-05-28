import { TestBed } from '@angular/core/testing';

import { ItBreakpointService } from './breakpoint.service';

describe('ItBreakpointService', () => {
  let service: ItBreakpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItBreakpointService);
  });

  afterEach(() => {
    service.ngOnDestroy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose currentBreakpoint as a signal', () => {
    const bp = service.currentBreakpoint();
    expect(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']).toContain(bp);
  });

  it('should expose currentMinWidth as a computed signal', () => {
    const width = service.currentMinWidth();
    expect(typeof width).toBe('number');
    expect(width).toBeGreaterThanOrEqual(0);
  });

  it('should return a computed signal from isAbove()', () => {
    const isAboveXs = service.isAbove('xs');
    // Every viewport is at or above xs (0px)
    expect(isAboveXs()).toBe(true);
  });

  it('should return a computed signal from isBelow()', () => {
    const isBelowXs = service.isBelow('xs');
    // No viewport is below xs (0px)
    expect(isBelowXs()).toBe(false);
  });

  it('should have consistent isAbove/isBelow for current breakpoint', () => {
    const bp = service.currentBreakpoint();
    const isAboveCurrent = service.isAbove(bp);
    expect(isAboveCurrent()).toBe(true);
  });

  it('should not throw on destroy', () => {
    expect(() => service.ngOnDestroy()).not.toThrow();
  });

  it('should survive double destroy', () => {
    service.ngOnDestroy();
    expect(() => service.ngOnDestroy()).not.toThrow();
  });
});
