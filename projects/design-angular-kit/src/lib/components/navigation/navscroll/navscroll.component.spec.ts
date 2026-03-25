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
