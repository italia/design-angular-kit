import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ItIconComponent } from './icon.component';
import { ItIconRegistryService } from '../../../services/icon-registry/icon-registry.service';
import { tb_base } from '../../../../test';

// ─── Host Components ─────────────────────────────────────────────────────────

@Component({
  selector: 'it-test-icon-default',
  template: '<it-icon name="search"></it-icon>',
  imports: [ItIconComponent],
})
class DefaultIconHost {}

@Component({
  selector: 'it-test-icon-size',
  template: '<it-icon name="search" size="lg"></it-icon>',
  imports: [ItIconComponent],
})
class SizedIconHost {}

@Component({
  selector: 'it-test-icon-color',
  template: '<it-icon name="search" color="primary"></it-icon>',
  imports: [ItIconComponent],
})
class ColoredIconHost {}

@Component({
  selector: 'it-test-icon-padded',
  template: '<it-icon name="search" [padded]="true"></it-icon>',
  imports: [ItIconComponent],
})
class PaddedIconHost {}

@Component({
  selector: 'it-test-icon-svg-class',
  template: '<it-icon name="search" svgClass="my-custom"></it-icon>',
  imports: [ItIconComponent],
})
class SvgClassIconHost {}

@Component({
  selector: 'it-test-icon-title',
  template: '<it-icon name="search" title="Search icon"></it-icon>',
  imports: [ItIconComponent],
})
class TitledIconHost {}

@Component({
  selector: 'it-test-icon-label',
  template: '<it-icon name="search" labelWaria="Search"></it-icon>',
  imports: [ItIconComponent],
})
class AriaLabelledIconHost {}

@Component({
  selector: 'it-test-icon-custom',
  template: '<it-icon name="my-custom-icon"></it-icon>',
  imports: [ItIconComponent],
})
class CustomIconHost {}

@Component({
  selector: 'it-test-icon-custom-sprite',
  template: '<it-icon name="my-sprite-icon"></it-icon>',
  imports: [ItIconComponent],
})
class CustomSpriteIconHost {}

// ─── Spec ────────────────────────────────────────────────────────────────────

describe('ItIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [
        ...(tb_base.imports || []),
        ItIconComponent,
        DefaultIconHost,
        SizedIconHost,
        ColoredIconHost,
        PaddedIconHost,
        SvgClassIconHost,
        TitledIconHost,
        AriaLabelledIconHost,
        CustomIconHost,
        CustomSpriteIconHost,
      ],
    }).compileComponents();
  });

  // ── Basic creation ──────────────────────────────────────────────────────────

  it('should create', () => {
    const fixture = TestBed.createComponent(ItIconComponent);
    fixture.componentInstance.name = 'search';
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  // ── Built-in sprite rendering ───────────────────────────────────────────────

  it('should render an SVG with <use> pointing to the built-in sprite', () => {
    const fixture = TestBed.createComponent(DefaultIconHost);
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg).toBeTruthy();
    const use = svg.query(By.css('use'));
    expect(use).toBeTruthy();
    const href = use.nativeElement.getAttribute('href') || use.nativeElement.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
    expect(href).toContain('sprites.svg#it-search');
  });

  it('should NOT render a <g> element for built-in icons', () => {
    const fixture = TestBed.createComponent(DefaultIconHost);
    fixture.detectChanges();
    const g = fixture.debugElement.query(By.css('svg > g'));
    expect(g).toBeNull();
  });

  // ── CSS classes ─────────────────────────────────────────────────────────────

  it('should apply base "icon" class by default', () => {
    const fixture = TestBed.createComponent(DefaultIconHost);
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg')).nativeElement;
    expect(svg.classList.contains('icon')).toBe(true);
  });

  it('should apply size class when size input is set', () => {
    const fixture = TestBed.createComponent(SizedIconHost);
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg')).nativeElement;
    expect(svg.classList.contains('icon-lg')).toBe(true);
  });

  it('should apply color class when color input is set', () => {
    const fixture = TestBed.createComponent(ColoredIconHost);
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg')).nativeElement;
    expect(svg.classList.contains('icon-primary')).toBe(true);
  });

  it('should apply padded class when padded is true', () => {
    const fixture = TestBed.createComponent(PaddedIconHost);
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg')).nativeElement;
    expect(svg.classList.contains('icon-padded')).toBe(true);
  });

  it('should apply custom svgClass', () => {
    const fixture = TestBed.createComponent(SvgClassIconHost);
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg')).nativeElement;
    expect(svg.classList.contains('my-custom')).toBe(true);
  });

  // ── Accessibility ───────────────────────────────────────────────────────────

  it('should be aria-hidden when no title or labelWaria', () => {
    const fixture = TestBed.createComponent(DefaultIconHost);
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg')).nativeElement;
    expect(svg.getAttribute('aria-hidden')).toBe('true');
    expect(svg.getAttribute('role')).toBeNull();
  });

  it('should render <title> and set aria-label when title is provided', () => {
    const fixture = TestBed.createComponent(TitledIconHost);
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg')).nativeElement;
    expect(svg.getAttribute('aria-hidden')).toBe('false');
    expect(svg.getAttribute('role')).toBe('img');
    expect(svg.getAttribute('aria-label')).toBe('Search icon');
    const titleEl = fixture.debugElement.query(By.css('svg > title'));
    expect(titleEl).toBeTruthy();
    expect(titleEl.nativeElement.textContent).toBe('Search icon');
  });

  it('should set role=img and aria-label when labelWaria is provided', () => {
    const fixture = TestBed.createComponent(AriaLabelledIconHost);
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg')).nativeElement;
    expect(svg.getAttribute('aria-hidden')).toBe('false');
    expect(svg.getAttribute('role')).toBe('img');
    expect(svg.getAttribute('aria-label')).toBe('Search');
  });

  // ── Custom inline SVG icons ─────────────────────────────────────────────────

  describe('ItIconRegistryService — inline SVG', () => {
    let registry: ItIconRegistryService;

    beforeEach(() => {
      registry = TestBed.inject(ItIconRegistryService);
      registry.clear();
    });

    afterEach(() => {
      registry.clear();
    });

    it('should render custom inline SVG when icon is registered', () => {
      const svgContent = '<circle cx="12" cy="12" r="10" fill="red"/>';
      registry.registerIcon('my-custom-icon', svgContent);

      const fixture = TestBed.createComponent(CustomIconHost);
      fixture.detectChanges();

      const svg = fixture.debugElement.query(By.css('svg'));
      expect(svg).toBeTruthy();

      // Must have a <g> with innerHTML (no <use>)
      const g = svg.query(By.css('g'));
      expect(g).toBeTruthy();
      expect(g.nativeElement.innerHTML).toContain('circle');
      expect(g.nativeElement.innerHTML).toContain('r="10"');

      // Must NOT have a <use> element
      const use = svg.query(By.css('use'));
      expect(use).toBeNull();
    });

    it('should fall back to built-in sprite when custom icon is NOT registered', () => {
      // Do NOT register 'my-custom-icon'
      const fixture = TestBed.createComponent(CustomIconHost);
      fixture.detectChanges();

      const use = fixture.debugElement.query(By.css('svg use'));
      expect(use).toBeTruthy();
      const href = use.nativeElement.getAttribute('href') || use.nativeElement.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
      expect(href).toContain('sprites.svg#it-my-custom-icon');
    });

    it('should apply all CSS classes to custom inline SVG icons', () => {
      registry.registerIcon('search', '<rect width="24" height="24"/>');
      const fixture = TestBed.createComponent(SizedIconHost);
      fixture.detectChanges();

      const svg = fixture.debugElement.query(By.css('svg')).nativeElement;
      expect(svg.classList.contains('icon')).toBe(true);
      expect(svg.classList.contains('icon-lg')).toBe(true);
    });

    it('should allow removing a registered icon (falls back to sprite)', () => {
      registry.registerIcon('my-custom-icon', '<path d="M0 0"/>');
      expect(registry.hasIcon('my-custom-icon')).toBe(true);

      const removed = registry.removeIcon('my-custom-icon');
      expect(removed).toBe(true);
      expect(registry.hasIcon('my-custom-icon')).toBe(false);

      const fixture = TestBed.createComponent(CustomIconHost);
      fixture.detectChanges();

      // Should render as sprite fallback
      const use = fixture.debugElement.query(By.css('svg use'));
      expect(use).toBeTruthy();
    });

    it('should support registerIcons bulk registration', () => {
      registry.registerIcons({
        'my-custom-icon': '<rect width="10" height="10"/>',
        'another-icon': '<circle cx="5" cy="5" r="5"/>',
      });

      expect(registry.hasIcon('my-custom-icon')).toBe(true);
      expect(registry.hasIcon('another-icon')).toBe(true);
    });

    it('should clear all registered icons', () => {
      registry.registerIcon('my-custom-icon', '<rect/>');
      registry.registerIconFromSprite('my-sprite-icon', '/sprites.svg', 'star');
      registry.clear();

      expect(registry.hasIcon('my-custom-icon')).toBe(false);
      expect(registry.hasIcon('my-sprite-icon')).toBe(false);
    });

    it('custom icon should take precedence over built-in sprite when name collides', () => {
      const customSvg = '<path d="M1 2 L3 4" class="custom-override"/>';
      registry.registerIcon('search', customSvg);

      const fixture = TestBed.createComponent(DefaultIconHost);
      fixture.detectChanges();

      // Should render inline SVG, NOT <use>
      const g = fixture.debugElement.query(By.css('svg g'));
      expect(g).toBeTruthy();
      expect(g.nativeElement.innerHTML).toContain('custom-override');

      const use = fixture.debugElement.query(By.css('svg use'));
      expect(use).toBeNull();
    });
  });

  // ── Custom sprite icons ─────────────────────────────────────────────────────

  describe('ItIconRegistryService — external sprite', () => {
    let registry: ItIconRegistryService;

    beforeEach(() => {
      registry = TestBed.inject(ItIconRegistryService);
      registry.clear();
    });

    afterEach(() => {
      registry.clear();
    });

    it('should render <use> with custom sprite href', () => {
      registry.registerIconFromSprite('my-sprite-icon', '/assets/custom-sprites.svg', 'star');

      const fixture = TestBed.createComponent(CustomSpriteIconHost);
      fixture.detectChanges();

      const use = fixture.debugElement.query(By.css('svg use'));
      expect(use).toBeTruthy();
      const href = use.nativeElement.getAttribute('href') || use.nativeElement.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
      expect(href).toBe('/assets/custom-sprites.svg#star');
    });

    it('should NOT render <g> element for sprite-based custom icons', () => {
      registry.registerIconFromSprite('my-sprite-icon', '/assets/custom-sprites.svg', 'star');

      const fixture = TestBed.createComponent(CustomSpriteIconHost);
      fixture.detectChanges();

      const g = fixture.debugElement.query(By.css('svg g'));
      expect(g).toBeNull();
    });

    it('inline SVG registration takes priority over sprite for the same name', () => {
      registry.registerIconFromSprite('my-custom-icon', '/sprites.svg', 'star');
      registry.registerIcon('my-custom-icon', '<rect class="inline-wins"/>');

      const fixture = TestBed.createComponent(CustomIconHost);
      fixture.detectChanges();

      const g = fixture.debugElement.query(By.css('svg g'));
      expect(g).toBeTruthy();
      expect(g.nativeElement.innerHTML).toContain('inline-wins');
    });
  });

  // ── ItIconRegistryService standalone tests ──────────────────────────────────

  describe('ItIconRegistryService — unit', () => {
    let registry: ItIconRegistryService;

    beforeEach(() => {
      registry = TestBed.inject(ItIconRegistryService);
      registry.clear();
    });

    afterEach(() => {
      registry.clear();
    });

    it('should return false for hasIcon on unregistered name', () => {
      expect(registry.hasIcon('nonexistent')).toBe(false);
    });

    it('should return undefined for getIconSvg on unregistered name', () => {
      expect(registry.getIconSvg('nonexistent')).toBeUndefined();
    });

    it('should return undefined for getIconSpriteHref on unregistered name', () => {
      expect(registry.getIconSpriteHref('nonexistent')).toBeUndefined();
    });

    it('removeIcon should return false when icon does not exist', () => {
      expect(registry.removeIcon('nonexistent')).toBe(false);
    });

    it('should store and retrieve inline SVG content as SafeHtml', () => {
      registry.registerIcon('test-icon', '<circle r="5"/>');
      const svg = registry.getIconSvg('test-icon');
      expect(svg).toBeTruthy();
    });

    it('should store and retrieve sprite href', () => {
      registry.registerIconFromSprite('test-sprite', '/my-sprites.svg', 'heart');
      const href = registry.getIconSpriteHref('test-sprite');
      expect(href).toBe('/my-sprites.svg#heart');
    });

    it('hasIcon returns true for both inline and sprite registrations', () => {
      registry.registerIcon('inline-one', '<path/>');
      registry.registerIconFromSprite('sprite-one', '/s.svg', 'id');
      expect(registry.hasIcon('inline-one')).toBe(true);
      expect(registry.hasIcon('sprite-one')).toBe(true);
    });
  });
});
