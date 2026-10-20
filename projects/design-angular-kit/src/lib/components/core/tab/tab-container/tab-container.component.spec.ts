import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ItTabContainerComponent } from './tab-container.component';
import { ItTabItemComponent } from '../tab-item/tab-item.component';
import { tb_base } from '../../../../../test';

@Component({
  selector: 'it-tab-vertical-host',
  standalone: true,
  imports: [ItTabContainerComponent, ItTabItemComponent],
  template: `
    <it-tab-container
      [vertical]="vertical"
      [verticalBackground]="verticalBackground"
      [iconText]="iconText"
      [inverted]="inverted"
      [dark]="dark">
      <it-tab-item label="Tab 1" [active]="true">Content 1</it-tab-item>
      <it-tab-item label="Tab 2">Content 2</it-tab-item>
      <it-tab-item label="Tab 3">Content 3</it-tab-item>
    </it-tab-container>
  `,
})
class ItTabVerticalHostComponent {
  vertical = false;
  verticalBackground = false;
  iconText = false;
  inverted = false;
  dark = false;
}

describe('ItTabContainerComponent', () => {
  let component: ItTabContainerComponent;
  let fixture: ComponentFixture<ItTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ItTabContainerComponent vertical design specs', () => {
  let fixture: ComponentFixture<ItTabVerticalHostComponent>;
  let hostComponent: ItTabVerticalHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...(tb_base.imports || []), ItTabVerticalHostComponent],
    })
      .overrideComponent(ItTabContainerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ItTabVerticalHostComponent);
    hostComponent = fixture.componentInstance;
  });

  describe('horizontal mode (default)', () => {
    it('should NOT apply row class when vertical=false', () => {
      fixture.detectChanges();
      const container = fixture.nativeElement.querySelector('it-tab-container > div');
      expect(container.classList.contains('row')).toBeFalse();
    });

    it('should NOT apply column classes when vertical=false', () => {
      fixture.detectChanges();
      const divs = fixture.nativeElement.querySelectorAll('it-tab-container > div > div');
      divs.forEach((div: HTMLElement) => {
        expect(div.getAttribute('class') || '').not.toContain('col-');
      });
    });

    it('should NOT set aria-orientation on tablist when horizontal', () => {
      fixture.detectChanges();
      const ul = fixture.nativeElement.querySelector('[role="tablist"]');
      expect(ul.getAttribute('aria-orientation')).toBeNull();
    });
  });

  describe('vertical mode – text-only', () => {
    beforeEach(() => {
      hostComponent.vertical = true;
      hostComponent.iconText = false;
    });

    it('should apply row class to outer container', () => {
      fixture.detectChanges();
      const container = fixture.nativeElement.querySelector('it-tab-container > div');
      expect(container.classList.contains('row')).toBeTrue();
    });

    it('should apply nav-tabs-vertical class to ul', () => {
      fixture.detectChanges();
      const ul = fixture.nativeElement.querySelector('ul.nav-tabs');
      expect(ul.classList.contains('nav-tabs-vertical')).toBeTrue();
    });

    it('should apply aria-orientation="vertical" to tablist', () => {
      fixture.detectChanges();
      const ul = fixture.nativeElement.querySelector('[role="tablist"]');
      expect(ul.getAttribute('aria-orientation')).toBe('vertical');
    });

    it('should apply col-4 col-md-3 to nav column (text-only)', () => {
      fixture.detectChanges();
      const navCol = fixture.nativeElement.querySelector('it-tab-container > div > div:first-child');
      expect(navCol.classList.contains('col-4')).toBeTrue();
      expect(navCol.classList.contains('col-md-3')).toBeTrue();
      expect(navCol.classList.contains('col-5')).toBeFalse();
    });

    it('should apply col-8 col-md-9 to content column (text-only)', () => {
      fixture.detectChanges();
      const contentCol = fixture.nativeElement.querySelector('it-tab-container > div > div:last-child');
      expect(contentCol.classList.contains('col-8')).toBeTrue();
      expect(contentCol.classList.contains('col-md-9')).toBeTrue();
      expect(contentCol.classList.contains('col-7')).toBeFalse();
    });
  });

  describe('vertical mode – icon+text', () => {
    beforeEach(() => {
      hostComponent.vertical = true;
      hostComponent.iconText = true;
    });

    it('should apply wider col-5 col-md-4 col-lg-3 to nav column', () => {
      fixture.detectChanges();
      const navCol = fixture.nativeElement.querySelector('it-tab-container > div > div:first-child');
      expect(navCol.classList.contains('col-5')).toBeTrue();
      expect(navCol.classList.contains('col-md-4')).toBeTrue();
      expect(navCol.classList.contains('col-lg-3')).toBeTrue();
      expect(navCol.classList.contains('col-4')).toBeFalse();
    });

    it('should apply col-7 col-md-8 col-lg-9 to content column', () => {
      fixture.detectChanges();
      const contentCol = fixture.nativeElement.querySelector('it-tab-container > div > div:last-child');
      expect(contentCol.classList.contains('col-7')).toBeTrue();
      expect(contentCol.classList.contains('col-md-8')).toBeTrue();
      expect(contentCol.classList.contains('col-lg-9')).toBeTrue();
      expect(contentCol.classList.contains('col-8')).toBeFalse();
    });
  });

  describe('verticalBackground', () => {
    it('should NOT apply nav-tabs-vertical-background when verticalBackground=false', () => {
      hostComponent.vertical = true;
      fixture.detectChanges();
      const ul = fixture.nativeElement.querySelector('ul.nav-tabs');
      expect(ul.classList.contains('nav-tabs-vertical-background')).toBeFalse();
    });

    it('should apply nav-tabs-vertical-background when vertical + verticalBackground', () => {
      hostComponent.vertical = true;
      hostComponent.verticalBackground = true;
      fixture.detectChanges();
      const ul = fixture.nativeElement.querySelector('ul.nav-tabs');
      expect(ul.classList.contains('nav-tabs-vertical-background')).toBeTrue();
    });

    it('should NOT apply nav-tabs-vertical-background when horizontal + verticalBackground', () => {
      hostComponent.vertical = false;
      hostComponent.verticalBackground = true;
      fixture.detectChanges();
      const ul = fixture.nativeElement.querySelector('ul.nav-tabs');
      expect(ul.classList.contains('nav-tabs-vertical-background')).toBeFalse();
    });
  });

  describe('inverted vertical (right-positioned tabs)', () => {
    beforeEach(() => {
      hostComponent.vertical = true;
      hostComponent.inverted = true;
    });

    it('should apply flex-row-reverse to outer container', () => {
      fixture.detectChanges();
      const container = fixture.nativeElement.querySelector('it-tab-container > div');
      expect(container.classList.contains('flex-row-reverse')).toBeTrue();
    });

    it('should maintain correct column sizing based on iconText, not inverted', () => {
      hostComponent.iconText = false;
      fixture.detectChanges();
      const navCol = fixture.nativeElement.querySelector('it-tab-container > div > div:first-child');
      expect(navCol.classList.contains('col-4')).toBeTrue();
      expect(navCol.classList.contains('col-md-3')).toBeTrue();
    });

    it('should use wider columns for inverted + iconText', () => {
      hostComponent.iconText = true;
      fixture.detectChanges();
      const navCol = fixture.nativeElement.querySelector('it-tab-container > div > div:first-child');
      expect(navCol.classList.contains('col-5')).toBeTrue();
      expect(navCol.classList.contains('col-md-4')).toBeTrue();
      expect(navCol.classList.contains('col-lg-3')).toBeTrue();
    });
  });

  describe('inverted horizontal (bottom-positioned tabs)', () => {
    beforeEach(() => {
      hostComponent.inverted = true;
      hostComponent.vertical = false;
    });

    it('should apply d-flex and flex-column-reverse', () => {
      fixture.detectChanges();
      const container = fixture.nativeElement.querySelector('it-tab-container > div');
      expect(container.classList.contains('d-flex')).toBeTrue();
      expect(container.classList.contains('flex-column-reverse')).toBeTrue();
    });

    it('should NOT apply row class', () => {
      fixture.detectChanges();
      const container = fixture.nativeElement.querySelector('it-tab-container > div');
      expect(container.classList.contains('row')).toBeFalse();
    });
  });
});
