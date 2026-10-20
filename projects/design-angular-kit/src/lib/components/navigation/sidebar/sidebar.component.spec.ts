import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSidebarComponent } from './sidebar.component';
import { ItListComponent } from '../../core/list/list/list.component';
import { ItListItemComponent } from '../../core/list/list-item/list-item.component';
import { tb_base } from '../../../../test';

/* ------------------------------------------------------------------ */
/*  Test-host components                                               */
/* ------------------------------------------------------------------ */

/** Sidebar with static list items (baseline). */
@Component({
  selector: 'it-test-sidebar-static',
  template: `
    <it-sidebar [header]="header" [dark]="dark">
      <it-list [linkList]="true">
        <it-list-item href="#" [active]="true">Active item</it-list-item>
        <it-list-item href="#">Item 2</it-list-item>
        <it-list-item href="#">Item 3</it-list-item>
      </it-list>
    </it-sidebar>
  `,
  imports: [ItSidebarComponent, ItListComponent, ItListItemComponent],
})
class StaticSidebarHost {
  header: string | undefined = 'Menù';
  dark = false;
}

/** Sidebar with @for-generated list items (#608 problem 1). */
@Component({
  selector: 'it-test-sidebar-for',
  template: `
    <it-sidebar header="Menù">
      <it-list [linkList]="true">
        @for (item of items; track item.id) {
          <it-list-item [href]="item.href" [active]="item.active">
            {{ item.label }}
          </it-list-item>
        }
      </it-list>
    </it-sidebar>
  `,
  imports: [ItSidebarComponent, ItListComponent, ItListItemComponent],
})
class ForLoopSidebarHost {
  items = [
    { id: 1, href: '#', active: true, label: 'Primo elemento' },
    { id: 2, href: '#', active: false, label: 'Secondo elemento' },
    { id: 3, href: '#', active: false, label: 'Terzo elemento' },
  ];
}

/** Sidebar WITHOUT secondary content (#608 problem 2). */
@Component({
  selector: 'it-test-sidebar-no-secondary',
  template: `
    <it-sidebar header="Senza secondario">
      <it-list [linkList]="true">
        <it-list-item href="#">Primary only</it-list-item>
      </it-list>
    </it-sidebar>
  `,
  imports: [ItSidebarComponent, ItListComponent, ItListItemComponent],
})
class NoSecondarySidebarHost {}

/** Sidebar WITH secondary content. */
@Component({
  selector: 'it-test-sidebar-with-secondary',
  template: `
    <it-sidebar header="Con secondario">
      <it-list [linkList]="true">
        <it-list-item href="#">Primary item</it-list-item>
      </it-list>
      <it-list [linkList]="true" secondary>
        <it-list-item href="#">Secondary item</it-list-item>
      </it-list>
    </it-sidebar>
  `,
  imports: [ItSidebarComponent, ItListComponent, ItListItemComponent],
})
class WithSecondarySidebarHost {}

/** Sidebar in dark mode (#608 problem 3). */
@Component({
  selector: 'it-test-sidebar-dark',
  template: `
    <it-sidebar header="Dark" [dark]="true">
      <it-list [linkList]="true">
        <it-list-item href="#" [iconLeft]="true">Dark item</it-list-item>
      </it-list>
    </it-sidebar>
  `,
  imports: [ItSidebarComponent, ItListComponent, ItListItemComponent],
})
class DarkSidebarHost {}

/* ------------------------------------------------------------------ */
/*  Test suites                                                        */
/* ------------------------------------------------------------------ */

describe('ItSidebarComponent', () => {
  /* ---------- basic creation (existing test kept) ---------- */

  describe('basic creation', () => {
    let component: ItSidebarComponent;
    let fixture: ComponentFixture<ItSidebarComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule(tb_base).compileComponents();
      fixture = TestBed.createComponent(ItSidebarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  /* ---------- Problem 1: @for loop layout ---------- */

  describe('@for loop rendering (#608-1)', () => {
    let fixture: ComponentFixture<ForLoopSidebarHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports ?? []), ForLoopSidebarHost, StaticSidebarHost],
      })
        .overrideComponent(ItSidebarComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .overrideComponent(ItListComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .overrideComponent(ItListItemComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .compileComponents();
      fixture = TestBed.createComponent(ForLoopSidebarHost);
      fixture.detectChanges();
    });

    it('should render exactly 3 list items from @for', () => {
      const items = fixture.nativeElement.querySelectorAll('.list-item');
      expect(items.length).toBe(3);
    });

    it('should apply display:contents to <it-list-item> custom elements', () => {
      const host: HTMLElement = fixture.nativeElement.querySelector('it-list-item');
      expect(host).toBeTruthy();
      const style = getComputedStyle(host);
      expect(style.display).toBe('contents');
    });

    it('should mark first item as active', () => {
      const items = fixture.nativeElement.querySelectorAll('.list-item');
      expect(items[0].classList.contains('active')).toBeTrue();
      expect(items[1].classList.contains('active')).toBeFalse();
    });

    it('should produce same number of list-items and same active classes as static rendering', async () => {
      const staticFixture = TestBed.createComponent(StaticSidebarHost);
      staticFixture.detectChanges();

      const dynamicItems = fixture.nativeElement.querySelectorAll('.list-item');
      const staticItems = staticFixture.nativeElement.querySelectorAll('.list-item');

      expect(dynamicItems.length).toBe(staticItems.length);
      for (let i = 0; i < dynamicItems.length; i++) {
        expect(dynamicItems[i].classList.contains('active')).toBe(staticItems[i].classList.contains('active'));
      }
    });

    it('should render <li> elements inside <ul class="link-list">', () => {
      const listItems = fixture.nativeElement.querySelectorAll('ul.link-list li');
      expect(listItems.length).toBe(3);
    });
  });

  /* ---------- Problem 2: secondary divider visibility ---------- */

  describe('secondary section divider (#608-2)', () => {
    it('should hide secondary wrapper when no [secondary] content is projected', async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports ?? []), NoSecondarySidebarHost],
      })
        .overrideComponent(ItSidebarComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .compileComponents();
      const fixture = TestBed.createComponent(NoSecondarySidebarHost);
      fixture.detectChanges();

      const secondaryWrapper: HTMLElement = fixture.nativeElement.querySelector('.linklist-secondary');
      expect(secondaryWrapper).toBeTruthy();
      expect(secondaryWrapper.children.length).toBe(0);
    });

    it('should keep secondary wrapper visible when [secondary] content is projected', async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports ?? []), WithSecondarySidebarHost],
      })
        .overrideComponent(ItSidebarComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .compileComponents();
      const fixture = TestBed.createComponent(WithSecondarySidebarHost);
      fixture.detectChanges();

      const secondaryWrapper: HTMLElement = fixture.nativeElement.querySelector('.linklist-secondary');
      expect(secondaryWrapper).toBeTruthy();
      expect(secondaryWrapper.children.length).toBeGreaterThan(0);
    });
  });

  /* ---------- Problem 3: dark mode ---------- */

  describe('dark mode (#608-3)', () => {
    let fixture: ComponentFixture<DarkSidebarHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports ?? []), DarkSidebarHost],
      })
        .overrideComponent(ItSidebarComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .compileComponents();
      fixture = TestBed.createComponent(DarkSidebarHost);
      fixture.detectChanges();
    });

    it('should apply theme-dark class to host when dark=true', () => {
      const host: HTMLElement = fixture.nativeElement.querySelector('it-sidebar');
      expect(host.classList.contains('theme-dark')).toBeTrue();
    });

    it('should apply sidebar-wrapper class to host', () => {
      const host: HTMLElement = fixture.nativeElement.querySelector('it-sidebar');
      expect(host.classList.contains('sidebar-wrapper')).toBeTrue();
    });
  });

  /* ---------- Problem 4: active state styling ---------- */

  describe('active state (#608-4)', () => {
    let fixture: ComponentFixture<StaticSidebarHost>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports ?? []), StaticSidebarHost],
      })
        .overrideComponent(ItSidebarComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .overrideComponent(ItListComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .overrideComponent(ItListItemComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .compileComponents();
      fixture = TestBed.createComponent(StaticSidebarHost);
      fixture.detectChanges();
    });

    it('should apply active class to the first list-item', () => {
      const items = fixture.nativeElement.querySelectorAll('.list-item');
      expect(items[0].classList.contains('active')).toBeTrue();
    });

    it('should NOT apply active class to non-active items', () => {
      const items = fixture.nativeElement.querySelectorAll('.list-item');
      expect(items[1].classList.contains('active')).toBeFalse();
      expect(items[2].classList.contains('active')).toBeFalse();
    });

    it('should render items inside <li> elements within the link-list', () => {
      const listItems = fixture.nativeElement.querySelectorAll('ul.link-list li');
      expect(listItems.length).toBe(3);
    });
  });

  /* ---------- header rendering ---------- */

  describe('header', () => {
    it('should render h3 when header is set', async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports ?? []), StaticSidebarHost],
      })
        .overrideComponent(ItSidebarComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .compileComponents();
      const fixture = TestBed.createComponent(StaticSidebarHost);
      fixture.componentInstance.header = 'Menù';
      fixture.detectChanges();

      const h3: HTMLElement = fixture.nativeElement.querySelector('h3');
      expect(h3).toBeTruthy();
      expect(h3.textContent).toContain('Menù');
    });

    it('should NOT render h3 when header is not set', async () => {
      await TestBed.configureTestingModule({
        ...tb_base,
        imports: [...(tb_base.imports ?? []), StaticSidebarHost],
      })
        .overrideComponent(ItSidebarComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
        .compileComponents();
      const fixture = TestBed.createComponent(StaticSidebarHost);
      fixture.componentInstance.header = undefined;
      fixture.detectChanges();

      const h3: HTMLElement = fixture.nativeElement.querySelector('h3');
      expect(h3).toBeFalsy();
    });
  });

  /* ---------- inputs binding ---------- */

  describe('host class bindings', () => {
    let fixture: ComponentFixture<ItSidebarComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule(tb_base).compileComponents();
      fixture = TestBed.createComponent(ItSidebarComponent);
    });

    it('should add it-line-right-side when withRightLine=true', () => {
      fixture.componentInstance.withRightLine = true;
      fixture.detectChanges();
      expect(fixture.nativeElement.classList.contains('it-line-right-side')).toBeTrue();
    });

    it('should add it-line-left-side when withLeftLine=true', () => {
      fixture.componentInstance.withLeftLine = true;
      fixture.detectChanges();
      expect(fixture.nativeElement.classList.contains('it-line-left-side')).toBeTrue();
    });
  });
});
