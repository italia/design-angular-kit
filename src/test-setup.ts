// jsdom does not implement some browser APIs used by bootstrap-italia (progressbar.js, splide).
const svgProto = (globalThis as any).SVGElement?.prototype;
if (svgProto && !svgProto.getTotalLength) {
  svgProto.getTotalLength = () => 0;
  svgProto.getPointAtLength = () => ({ x: 0, y: 0 });
}

if (!globalThis.matchMedia) {
  globalThis.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  })) as typeof globalThis.matchMedia;
}

// The Angular unit-test builder initializes TestBed with strict unknown element/property checks.
// The demo-app specs were written for Karma (lenient defaults), so re-initialize TestBed accordingly.
import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

@NgModule({ providers: [provideZoneChangeDetection()] })
class LenientTestModule {}

getTestBed().resetTestEnvironment();
getTestBed().initTestEnvironment([BrowserTestingModule, LenientTestModule], platformBrowserTesting(), {
  errorOnUnknownElements: false,
  errorOnUnknownProperties: false,
  teardown: { destroyAfterEach: false },
});
