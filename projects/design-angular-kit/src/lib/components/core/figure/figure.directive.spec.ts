import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ItFigureDirective } from './figure.directive';

@Component({
  selector: 'it-test-figure-basic',
  template: `
    <it-figure>
      <img src="https://placeholderimage.eu/api/city/400/300" alt="City view" />
    </it-figure>
  `,
  imports: [ItFigureDirective],
})
class BasicFigureTestComponent {}

@Component({
  selector: 'it-test-figure-caption',
  template: `
    <it-figure>
      <img src="https://placeholderimage.eu/api/city/400/300" alt="City view" />
      <figcaption class="figure-caption">A beautiful Italian cityscape</figcaption>
    </it-figure>
  `,
  imports: [ItFigureDirective],
})
class FigureWithCaptionTestComponent {}

@Component({
  selector: 'it-test-figure-extra-class',
  template: `
    <it-figure class="img-full">
      <img src="https://placeholderimage.eu/api/city/800/600" alt="Full-width city view" />
    </it-figure>
  `,
  imports: [ItFigureDirective],
})
class FigureWithExtraClassTestComponent {}

describe('ItFigureDirective', () => {
  describe('basic usage', () => {
    let fixture: ComponentFixture<BasicFigureTestComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [BasicFigureTestComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(BasicFigureTestComponent);
      fixture.detectChanges();
    });

    it('should create the host element', () => {
      const figureEl = fixture.debugElement.query(By.directive(ItFigureDirective));
      expect(figureEl).toBeTruthy();
    });

    it('should automatically apply the "figure" CSS class to the host', () => {
      const figureEl = fixture.debugElement.query(By.directive(ItFigureDirective));
      expect(figureEl.nativeElement.classList.contains('figure')).toBeTrue();
    });

    it('should project the <img> child into the host', () => {
      const img = fixture.debugElement.query(By.css('it-figure img'));
      expect(img).toBeTruthy();
      expect(img.nativeElement.getAttribute('alt')).toBe('City view');
    });
  });

  describe('with caption', () => {
    let fixture: ComponentFixture<FigureWithCaptionTestComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [FigureWithCaptionTestComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(FigureWithCaptionTestComponent);
      fixture.detectChanges();
    });

    it('should project both <img> and <figcaption> into the host', () => {
      const img = fixture.debugElement.query(By.css('it-figure img'));
      const caption = fixture.debugElement.query(By.css('it-figure figcaption'));
      expect(img).toBeTruthy();
      expect(caption).toBeTruthy();
      expect(caption.nativeElement.textContent).toContain('A beautiful Italian cityscape');
    });
  });

  describe('with additional CSS classes', () => {
    let fixture: ComponentFixture<FigureWithExtraClassTestComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [FigureWithExtraClassTestComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(FigureWithExtraClassTestComponent);
      fixture.detectChanges();
    });

    it('should keep the "figure" class alongside consumer-added classes', () => {
      const figureEl = fixture.debugElement.query(By.directive(ItFigureDirective));
      expect(figureEl.nativeElement.classList.contains('figure')).toBeTrue();
      expect(figureEl.nativeElement.classList.contains('img-full')).toBeTrue();
    });
  });
});
