import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ItRatioDirective } from './ratio.directive';

@Component({
  selector: 'it-test-ratio-16x9',
  template: `
    <div itRatio="16x9">
      <img src="https://placeholderimage.eu/api/city/800/450" alt="16:9 landscape" />
    </div>
  `,
  imports: [ItRatioDirective],
})
class Ratio16x9TestComponent {}

@Component({
  selector: 'it-test-ratio-1x1',
  template: `
    <div itRatio="1x1">
      <img src="https://placeholderimage.eu/api/city/400/400" alt="Square image" />
    </div>
  `,
  imports: [ItRatioDirective],
})
class Ratio1x1TestComponent {}

@Component({
  selector: 'it-test-ratio-base-only',
  template: `
    <div itRatio>
      <img src="https://placeholderimage.eu/api/city/400/300" alt="Default ratio" />
    </div>
  `,
  imports: [ItRatioDirective],
})
class RatioBaseOnlyTestComponent {}

@Component({
  selector: 'it-test-ratio-all-sizes',
  template: `
    <div itRatio="1x1" id="r1"></div>
    <div itRatio="3x2" id="r2"></div>
    <div itRatio="4x3" id="r3"></div>
    <div itRatio="16x9" id="r4"></div>
    <div itRatio="21x9" id="r5"></div>
  `,
  imports: [ItRatioDirective],
})
class RatioAllSizesTestComponent {}

describe('ItRatioDirective', () => {
  describe('16x9 ratio', () => {
    let fixture: ComponentFixture<Ratio16x9TestComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [Ratio16x9TestComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(Ratio16x9TestComponent);
      fixture.detectChanges();
    });

    it('should apply the base "ratio" class', () => {
      const el = fixture.debugElement.query(By.directive(ItRatioDirective));
      expect(el.nativeElement.classList.contains('ratio')).toBeTrue();
    });

    it('should apply the "ratio-16x9" variant class', () => {
      const el = fixture.debugElement.query(By.directive(ItRatioDirective));
      expect(el.nativeElement.classList.contains('ratio-16x9')).toBeTrue();
    });

    it('should project child content', () => {
      const img = fixture.debugElement.query(By.css('[itRatio] img'));
      expect(img).toBeTruthy();
      expect(img.nativeElement.getAttribute('alt')).toBe('16:9 landscape');
    });
  });

  describe('1x1 ratio', () => {
    let fixture: ComponentFixture<Ratio1x1TestComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [Ratio1x1TestComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(Ratio1x1TestComponent);
      fixture.detectChanges();
    });

    it('should apply both "ratio" and "ratio-1x1" classes', () => {
      const el = fixture.debugElement.query(By.directive(ItRatioDirective));
      expect(el.nativeElement.classList.contains('ratio')).toBeTrue();
      expect(el.nativeElement.classList.contains('ratio-1x1')).toBeTrue();
    });
  });

  describe('base-only (no size)', () => {
    let fixture: ComponentFixture<RatioBaseOnlyTestComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RatioBaseOnlyTestComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(RatioBaseOnlyTestComponent);
      fixture.detectChanges();
    });

    it('should apply the base "ratio" class without a variant', () => {
      const el = fixture.debugElement.query(By.directive(ItRatioDirective));
      expect(el.nativeElement.classList.contains('ratio')).toBeTrue();
      expect(el.nativeElement.className).not.toMatch(/ratio-\d/);
    });
  });

  describe('all supported sizes', () => {
    let fixture: ComponentFixture<RatioAllSizesTestComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RatioAllSizesTestComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(RatioAllSizesTestComponent);
      fixture.detectChanges();
    });

    it('should apply the correct variant for every supported ratio', () => {
      const directives = fixture.debugElement.queryAll(By.directive(ItRatioDirective));
      expect(directives.length).toBe(5);

      const expected = ['ratio-1x1', 'ratio-3x2', 'ratio-4x3', 'ratio-16x9', 'ratio-21x9'];
      directives.forEach((de, i) => {
        expect(de.nativeElement.classList.contains('ratio')).withContext(`ratio base on #${i}`).toBeTrue();
        expect(de.nativeElement.classList.contains(expected[i])).withContext(`${expected[i]} on #${i}`).toBeTrue();
      });
    });
  });
});
