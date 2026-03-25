import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ItNavscrollComponent } from './navscroll.component';
import { tb_base } from '../../../../test';

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
