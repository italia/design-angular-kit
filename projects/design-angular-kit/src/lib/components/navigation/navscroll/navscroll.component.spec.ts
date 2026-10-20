import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tb_base } from '../../../../test';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ViewportScroller } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ItNavscrollComponent } from './navscroll.component';
import { NavscrollItem } from './navscroll.model';

function makeItems(): NavscrollItem[] {
  return [
    { title: 'Section One', href: 'section-1', text: 'Content one', childs: [] },
    { title: 'Section Two', href: 'section-2', text: 'Content two', childs: [] },
    { title: 'Section Three', href: 'section-3', text: 'Content three', childs: [] },
  ];
}

describe('ItNavscrollComponent', () => {
  let fixture: ComponentFixture<ItNavscrollComponent>;
  let component: ItNavscrollComponent;
  let scroller: ViewportScroller;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItNavscrollComponent, RouterTestingModule, TranslateModule.forRoot()],
    }).compileComponents();

    scroller = TestBed.inject(ViewportScroller);
    fixture = TestBed.createComponent(ItNavscrollComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.items = makeItems();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should NOT auto-scroll to first section on initial load', fakeAsync(() => {
    const scrollSpy = spyOn(scroller, 'scrollToAnchor');
    component.items = makeItems();
    fixture.detectChanges();
    tick(100);

    // The programmatic init selection must NOT trigger scrollToAnchor
    expect(scrollSpy).not.toHaveBeenCalled();
  }));

  it('should render all section headings', () => {
    component.items = makeItems();
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const headings = el.querySelectorAll('.it-page-section');
    expect(headings.length).toBe(3);
    expect(headings[0].textContent?.trim()).toBe('Section One');
    expect(headings[1].textContent?.trim()).toBe('Section Two');
    expect(headings[2].textContent?.trim()).toBe('Section Three');
  });

  it('should display the header text', () => {
    component.items = makeItems();
    component.header = 'Navigation';
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const h3 = el.querySelector('h3');
    expect(h3?.textContent?.trim()).toBe('Navigation');
  });

  it('should render nav links for each item', () => {
    component.items = makeItems();
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('.nav-link');
    expect(links.length).toBe(3);
  });
});

@Component({
  selector: 'it-test-accordion-host',
  standalone: true,
  imports: [ItNavscrollComponent],
  template: `
    <it-navscroll header="Indice della pagina" [items]="items" [headerAsAccordion]="true" [accordionExpanded]="expanded"> </it-navscroll>
  `,
})
class AccordionHostComponent {
  expanded = true;
  items = [
    { title: 'Section 1', href: 'section-1' },
    { title: 'Section 2', href: 'section-2' },
  ];
}

@Component({
  selector: 'it-test-no-accordion-host',
  standalone: true,
  imports: [ItNavscrollComponent],
  template: ` <it-navscroll header="Standard Header" [items]="items"> </it-navscroll> `,
})
class NoAccordionHostComponent {
  items = [{ title: 'Section A', href: 'section-a' }];
}

describe('ItNavscrollComponent headerAsAccordion', () => {
  let fixture: ComponentFixture<AccordionHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...tb_base.imports, AccordionHostComponent],
    })
      .overrideComponent(ItNavscrollComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AccordionHostComponent);
    fixture.detectChanges();
  });

  it('should render an accordion wrapper when headerAsAccordion is true', () => {
    const accordion = fixture.nativeElement.querySelector('.accordion');
    expect(accordion).toBeTruthy();
  });

  it('should render the header text inside the accordion button', () => {
    const btn: HTMLElement = fixture.nativeElement.querySelector('.accordion-button');
    expect(btn).toBeTruthy();
    expect(btn.textContent?.trim()).toContain('Indice della pagina');
  });

  it('should start expanded by default (accordionExpanded=true)', () => {
    const body: HTMLElement = fixture.nativeElement.querySelector('.accordion-collapse');
    expect(body).toBeTruthy();
    expect(body.classList.contains('show')).toBeTrue();
  });

  it('should not have collapsed class on button when expanded', () => {
    const btn: HTMLElement = fixture.nativeElement.querySelector('.accordion-button');
    expect(btn.classList.contains('collapsed')).toBeFalse();
  });

  it('should collapse when accordionExpanded is false', () => {
    // Create a new fixture with expanded=false from the start
    const f2 = TestBed.createComponent(AccordionHostComponent);
    f2.componentInstance.expanded = false;
    f2.detectChanges();

    const body: HTMLElement = f2.nativeElement.querySelector('.accordion-collapse');
    expect(body.classList.contains('show')).toBeFalse();

    const btn: HTMLElement = f2.nativeElement.querySelector('.accordion-button');
    expect(btn.classList.contains('collapsed')).toBeTrue();
  });

  it('should render navscroll list items inside the accordion body', () => {
    const accordionBody = fixture.nativeElement.querySelector('.accordion-body');
    expect(accordionBody).toBeTruthy();
    const listItems = accordionBody.querySelector('it-navscroll-list-items');
    expect(listItems).toBeTruthy();
  });

  it('should NOT render a plain h3 header', () => {
    const h3 = fixture.nativeElement.querySelector('.link-list-wrapper > h3:not(.accordion-header)');
    expect(h3).toBeFalsy();
  });

  it('should have proper aria attributes', () => {
    const btn: HTMLElement = fixture.nativeElement.querySelector('.accordion-button');
    const body: HTMLElement = fixture.nativeElement.querySelector('.accordion-collapse');
    expect(btn.getAttribute('aria-expanded')).toBe('true');
    expect(btn.getAttribute('aria-controls')).toBe(body.id);
  });
});

describe('ItNavscrollComponent without accordion', () => {
  let fixture: ComponentFixture<NoAccordionHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...tb_base.imports, NoAccordionHostComponent],
    })
      .overrideComponent(ItNavscrollComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(NoAccordionHostComponent);
    fixture.detectChanges();
  });

  it('should NOT render accordion when headerAsAccordion is not set', () => {
    const accordion = fixture.nativeElement.querySelector('.accordion');
    expect(accordion).toBeFalsy();
  });

  it('should render plain h3 header', () => {
    const h3 = fixture.nativeElement.querySelector('.link-list-wrapper h3');
    expect(h3).toBeTruthy();
    expect(h3.textContent?.trim()).toBe('Standard Header');
  });
});
