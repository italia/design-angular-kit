import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ItDropdownComponent } from './dropdown.component';
import { ItDropdownItemComponent } from '../dropdown-item/dropdown-item.component';
import { tb_base } from '../../../../../test';

// ─── Test Host Components ───────────────────────────────────────────────────

@Component({
  template: `
    <it-dropdown>
      <span button>Default Dropdown</span>
      <it-dropdown-item list>Item 1</it-dropdown-item>
    </it-dropdown>
  `,
  imports: [ItDropdownComponent, ItDropdownItemComponent],
})
class DefaultDropdownHost {
  @ViewChild(ItDropdownComponent) dropdown!: ItDropdownComponent;
}

@Component({
  template: `
    <it-dropdown [noMenu]="true">
      <span button>Button Only</span>
    </it-dropdown>
  `,
  imports: [ItDropdownComponent],
})
class NoMenuDropdownHost {
  @ViewChild(ItDropdownComponent) dropdown!: ItDropdownComponent;
}

@Component({
  template: `
    <it-dropdown [iconName]="iconName" [iconSize]="iconSize" [staticIcon]="staticIcon">
      <span button>Custom Icon</span>
      <it-dropdown-item list>Item 1</it-dropdown-item>
    </it-dropdown>
  `,
  imports: [ItDropdownComponent, ItDropdownItemComponent],
})
class CustomIconDropdownHost {
  @ViewChild(ItDropdownComponent) dropdown!: ItDropdownComponent;
  iconName: any = 'it-settings';
  iconSize: any = 'lg';
  staticIcon = false;
}

@Component({
  template: `
    <it-dropdown [noMenu]="true" [iconName]="'it-close'" [iconSize]="'xs'" [staticIcon]="true">
      <span button>No Menu Static</span>
    </it-dropdown>
  `,
  imports: [ItDropdownComponent],
})
class CombinedFeaturesHost {
  @ViewChild(ItDropdownComponent) dropdown!: ItDropdownComponent;
}

@Component({
  template: `
    <it-dropdown [iconName]="'it-settings'" [iconSize]="'lg'" [staticIcon]="true">
      <span button>Static Icon</span>
      <it-dropdown-item list>Item</it-dropdown-item>
    </it-dropdown>
  `,
  imports: [ItDropdownComponent, ItDropdownItemComponent],
})
class StaticIconHost {
  @ViewChild(ItDropdownComponent) dropdown!: ItDropdownComponent;
}

@Component({
  template: `
    <it-dropdown [iconName]="'it-close'" [iconSize]="'xs'">
      <span button>Alt Icon</span>
      <it-dropdown-item list>Item</it-dropdown-item>
    </it-dropdown>
  `,
  imports: [ItDropdownComponent, ItDropdownItemComponent],
})
class AltIconHost {
  @ViewChild(ItDropdownComponent) dropdown!: ItDropdownComponent;
}

@Component({
  template: `
    <it-dropdown mode="link" [noMenu]="noMenu">
      <span button>Link Mode</span>
      <it-dropdown-item list>Item</it-dropdown-item>
    </it-dropdown>
  `,
  imports: [ItDropdownComponent, ItDropdownItemComponent],
})
class LinkModeHost {
  @ViewChild(ItDropdownComponent) dropdown!: ItDropdownComponent;
  noMenu = false;
}

// ─── Test Suites ────────────────────────────────────────────────────────────

describe('ItDropdownComponent', () => {
  // ── Default behavior (backward compatibility) ──
  describe('default behavior (backward compat)', () => {
    let fixture: ComponentFixture<DefaultDropdownHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports || []), DefaultDropdownHost],
      }).compileComponents();
      TestBed.overrideComponent(ItDropdownComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });
      TestBed.overrideComponent(ItDropdownItemComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });

      fixture = TestBed.createComponent(DefaultDropdownHost);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(fixture.componentInstance.dropdown).toBeTruthy();
    });

    it('should render dropdown-menu by default', () => {
      const menu = fixture.debugElement.query(By.css('.dropdown-menu'));
      expect(menu).toBeTruthy();
    });

    it('should have data-bs-toggle="dropdown" on the button', () => {
      const btn = fixture.debugElement.query(By.css('button'));
      expect(btn.nativeElement.getAttribute('data-bs-toggle')).toBe('dropdown');
    });

    it('should have aria-haspopup="true" on the button', () => {
      const btn = fixture.debugElement.query(By.css('button'));
      expect(btn.nativeElement.getAttribute('aria-haspopup')).toBe('true');
    });

    it('should render expand icon by default', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.name).toBe('expand');
    });

    it('should use sm icon size by default', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.size).toBe('sm');
    });

    it('should apply icon-expand svgClass for rotation animation by default', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.svgClass).toBe('icon-expand');
    });
  });

  // ── noMenu feature (#599) ──
  describe('noMenu feature (#599)', () => {
    let fixture: ComponentFixture<NoMenuDropdownHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports || []), NoMenuDropdownHost],
      }).compileComponents();
      TestBed.overrideComponent(ItDropdownComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });

      fixture = TestBed.createComponent(NoMenuDropdownHost);
      fixture.detectChanges();
    });

    it('should NOT render dropdown-menu when noMenu is true', () => {
      const menu = fixture.debugElement.query(By.css('.dropdown-menu'));
      expect(menu).toBeNull();
    });

    it('should NOT have data-bs-toggle attribute when noMenu is true', () => {
      const btn = fixture.debugElement.query(By.css('button'));
      expect(btn.nativeElement.hasAttribute('data-bs-toggle')).toBe(false);
    });

    it('should NOT have aria-haspopup attribute when noMenu is true', () => {
      const btn = fixture.debugElement.query(By.css('button'));
      expect(btn.nativeElement.hasAttribute('aria-haspopup')).toBe(false);
    });

    it('should still render the button with button content', () => {
      const btn = fixture.debugElement.query(By.css('button'));
      expect(btn).toBeTruthy();
      expect(btn.nativeElement.textContent).toContain('Button Only');
    });

    it('should still render the icon', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon).toBeTruthy();
    });

    it('should keep the dropdown wrapper div', () => {
      const wrapper = fixture.debugElement.query(By.css('.dropdown'));
      expect(wrapper).toBeTruthy();
    });
  });

  // ── noMenu in link mode ──
  describe('noMenu in link mode', () => {
    let fixture: ComponentFixture<LinkModeHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports || []), LinkModeHost],
      }).compileComponents();
      TestBed.overrideComponent(ItDropdownComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });
      TestBed.overrideComponent(ItDropdownItemComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });

      fixture = TestBed.createComponent(LinkModeHost);
    });

    it('should render menu in link mode by default', () => {
      fixture.detectChanges();
      const menu = fixture.debugElement.query(By.css('.dropdown-menu'));
      expect(menu).toBeTruthy();
    });

    it('should hide menu in link mode when noMenu is true', () => {
      fixture.componentInstance.noMenu = true;
      fixture.detectChanges();
      const menu = fixture.debugElement.query(By.css('.dropdown-menu'));
      expect(menu).toBeNull();
    });

    it('should remove data-bs-toggle from anchor in link mode when noMenu is true', () => {
      fixture.componentInstance.noMenu = true;
      fixture.detectChanges();
      const anchor = fixture.debugElement.query(By.css('a'));
      expect(anchor.nativeElement.hasAttribute('data-bs-toggle')).toBe(false);
    });
  });

  // ── Custom icon feature (#601) ──
  describe('custom icon feature (#601)', () => {
    let fixture: ComponentFixture<CustomIconDropdownHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports || []), CustomIconDropdownHost],
      }).compileComponents();
      TestBed.overrideComponent(ItDropdownComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });
      TestBed.overrideComponent(ItDropdownItemComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });

      fixture = TestBed.createComponent(CustomIconDropdownHost);
      fixture.detectChanges();
    });

    it('should use custom iconName', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.name).toBe('it-settings');
    });

    it('should use custom iconSize', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.size).toBe('lg');
    });

    it('should keep icon-expand rotation class when staticIcon is false', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.svgClass).toBe('icon-expand');
    });
  });

  // ── Static icon (separate host to avoid NG0100) ──
  describe('staticIcon feature (#601)', () => {
    let fixture: ComponentFixture<StaticIconHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports || []), StaticIconHost],
      }).compileComponents();
      TestBed.overrideComponent(ItDropdownComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });
      TestBed.overrideComponent(ItDropdownItemComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });

      fixture = TestBed.createComponent(StaticIconHost);
      fixture.detectChanges();
    });

    it('should remove icon-expand class when staticIcon is true', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.svgClass).toBe('');
    });
  });

  // ── Alternative icon values (separate host to avoid NG0100) ──
  describe('alternative icon values (#601)', () => {
    let fixture: ComponentFixture<AltIconHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports || []), AltIconHost],
      }).compileComponents();
      TestBed.overrideComponent(ItDropdownComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });
      TestBed.overrideComponent(ItDropdownItemComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });

      fixture = TestBed.createComponent(AltIconHost);
      fixture.detectChanges();
    });

    it('should use the provided iconName', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.name).toBe('it-close');
    });

    it('should use the provided iconSize', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.size).toBe('xs');
    });
  });

  // ── Combined features (#599 + #601) ──
  describe('combined noMenu + custom icon', () => {
    let fixture: ComponentFixture<CombinedFeaturesHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports || []), CombinedFeaturesHost],
      }).compileComponents();
      TestBed.overrideComponent(ItDropdownComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } });

      fixture = TestBed.createComponent(CombinedFeaturesHost);
      fixture.detectChanges();
    });

    it('should have no menu and custom icon at the same time', () => {
      const menu = fixture.debugElement.query(By.css('.dropdown-menu'));
      expect(menu).toBeNull();

      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.name).toBe('it-close');
      expect(icon.componentInstance.size).toBe('xs');
    });

    it('should have empty svgClass when staticIcon is true', () => {
      const icon = fixture.debugElement.query(By.css('it-icon'));
      expect(icon.componentInstance.svgClass).toBe('');
    });

    it('should not have data-bs-toggle when noMenu and custom icon combined', () => {
      const btn = fixture.debugElement.query(By.css('button'));
      expect(btn.nativeElement.hasAttribute('data-bs-toggle')).toBe(false);
    });
  });

  // ── iconSvgClass getter ──
  describe('iconSvgClass getter', () => {
    let component: ItDropdownComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports || []), ItDropdownComponent],
      }).compileComponents();

      const fixture = TestBed.createComponent(ItDropdownComponent);
      component = fixture.componentInstance;
    });

    it('should return "icon-expand" when staticIcon is falsy', () => {
      expect(component.iconSvgClass).toBe('icon-expand');
    });

    it('should return empty string when staticIcon is true', () => {
      component.staticIcon = true;
      expect(component.iconSvgClass).toBe('');
    });
  });
});
