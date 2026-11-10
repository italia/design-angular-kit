import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { tb_base } from '../../../../test';
import { ItDividerComponent } from './divider.component';

/* ------------------------------------------------------------------ */
/*  Host components                                                    */
/* ------------------------------------------------------------------ */

/** Uses the custom-element selector inside a <ul>. */
@Component({
  template: `
    <ul>
      <li>Before</li>
      <it-divider></it-divider>
      <li>After</li>
    </ul>
  `,
  imports: [ItDividerComponent],
})
class CustomElementHost {}

/** Uses the attribute selector on a native <li>. */
@Component({
  template: `
    <ul>
      <li>Before</li>
      <li itDivider></li>
      <li>After</li>
    </ul>
  `,
  imports: [ItDividerComponent],
})
class AttributeHost {}

/** Uses the component standalone outside a list context. */
@Component({
  template: `<it-divider></it-divider>`,
  imports: [ItDividerComponent],
})
class StandaloneHost {}

/** Multiple dividers in one list. */
@Component({
  template: `
    <ul>
      <li>A</li>
      <it-divider></it-divider>
      <li>B</li>
      <li itDivider></li>
      <li>C</li>
      <it-divider></it-divider>
      <li>D</li>
    </ul>
  `,
  imports: [ItDividerComponent],
})
class MultipleDividersHost {}

/* ------------------------------------------------------------------ */
/*  Test suite                                                         */
/* ------------------------------------------------------------------ */

describe('ItDividerComponent', () => {
  /* -- custom-element selector <it-divider> ------------------------ */

  describe('custom-element selector (<it-divider>)', () => {
    let fixture: ComponentFixture<CustomElementHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...tb_base.imports, CustomElementHost],
      }).compileComponents();
      fixture = TestBed.createComponent(CustomElementHost);
      fixture.detectChanges();
    });

    it('should render the component', () => {
      const dividerEl = fixture.nativeElement.querySelector('it-divider');
      expect(dividerEl).toBeTruthy();
    });

    it('should contain a <span class="divider"> inside an <li>', () => {
      const dividerEl = fixture.nativeElement.querySelector('it-divider');
      const li = dividerEl.querySelector('li');
      expect(li).toBeTruthy('expected a wrapping <li> when host is not <li>');
      const span = li.querySelector('span.divider');
      expect(span).toBeTruthy('expected <span class="divider"> inside the <li>');
    });

    it('should set isHostLi to false', () => {
      const debugDivider = fixture.debugElement.query(el => el.nativeElement.tagName === 'IT-DIVIDER');
      expect(debugDivider).toBeTruthy();
      const component = debugDivider.componentInstance as ItDividerComponent;
      expect(component.isHostLi).toBe(false);
    });

    it('should not produce any visible text content', () => {
      const dividerEl = fixture.nativeElement.querySelector('it-divider');
      const span = dividerEl.querySelector('span.divider');
      expect(span.textContent.trim()).toBe('');
    });
  });

  /* -- attribute selector li[itDivider] ----------------------------- */

  describe('attribute selector (li[itDivider])', () => {
    let fixture: ComponentFixture<AttributeHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...tb_base.imports, AttributeHost],
      }).compileComponents();
      fixture = TestBed.createComponent(AttributeHost);
      fixture.detectChanges();
    });

    it('should render the component on the <li>', () => {
      const li = fixture.nativeElement.querySelector('li[itDivider]');
      expect(li).toBeTruthy();
    });

    it('should contain a <span class="divider"> directly (no extra <li>)', () => {
      const li = fixture.nativeElement.querySelector('li[itDivider]');
      const span = li.querySelector('span.divider');
      expect(span).toBeTruthy('expected <span class="divider">');
      const nestedLi = li.querySelector('li');
      expect(nestedLi).toBeNull('should not nest another <li> inside the host <li>');
    });

    it('should set isHostLi to true', () => {
      const debugLi = fixture.debugElement.query(el => el.nativeElement.matches?.('li[itDivider]'));
      expect(debugLi).toBeTruthy();
      const component = debugLi.componentInstance as ItDividerComponent;
      expect(component.isHostLi).toBe(true);
    });
  });

  /* -- standalone (outside list) ------------------------------------ */

  describe('standalone (outside list)', () => {
    let fixture: ComponentFixture<StandaloneHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...tb_base.imports, StandaloneHost],
      }).compileComponents();
      fixture = TestBed.createComponent(StandaloneHost);
      fixture.detectChanges();
    });

    it('should render even outside a <ul>', () => {
      const dividerEl = fixture.nativeElement.querySelector('it-divider');
      expect(dividerEl).toBeTruthy();
    });

    it('should still contain <span class="divider">', () => {
      const dividerEl = fixture.nativeElement.querySelector('it-divider');
      const span = dividerEl.querySelector('span.divider');
      expect(span).toBeTruthy();
    });
  });

  /* -- multiple dividers -------------------------------------------- */

  describe('multiple dividers in one list', () => {
    let fixture: ComponentFixture<MultipleDividersHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...tb_base.imports, MultipleDividersHost],
      }).compileComponents();
      fixture = TestBed.createComponent(MultipleDividersHost);
      fixture.detectChanges();
    });

    it('should render all divider instances', () => {
      const customDividers = fixture.nativeElement.querySelectorAll('it-divider');
      const attrDividers = fixture.nativeElement.querySelectorAll('li[itDivider]');
      expect(customDividers.length).toBe(2, 'expected 2 <it-divider> elements');
      expect(attrDividers.length).toBe(1, 'expected 1 li[itDivider] element');
    });

    it('every divider should contain a <span class="divider">', () => {
      const allSpans = fixture.nativeElement.querySelectorAll('span.divider');
      expect(allSpans.length).toBe(3, 'expected 3 divider spans total');
    });
  });
});
