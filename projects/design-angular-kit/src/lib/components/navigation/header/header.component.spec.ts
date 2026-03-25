import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItHeaderComponent } from './header.component';
import { tb_base } from '../../../../test';

describe('ItHeaderComponent', () => {
  let component: ItHeaderComponent;
  let fixture: ComponentFixture<ItHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* ───────────────────────────────────────────── *
 *  showMobileMenu — hamburger menu toggle       *
 * ───────────────────────────────────────────── */

@Component({
  selector: 'it-test-header-mobile-menu',
  template: `<it-header [showMobileMenu]="showMobileMenu"></it-header>`,
  imports: [ItHeaderComponent],
})
class HeaderMobileMenuHost {
  showMobileMenu: boolean | undefined = true;
}

describe('ItHeaderComponent — showMobileMenu', () => {
  let fixture: ComponentFixture<HeaderMobileMenuHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...(tb_base as any).imports, HeaderMobileMenuHost],
    })
      .overrideComponent(ItHeaderComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  function createFixture(showMobile: boolean | undefined): ComponentFixture<HeaderMobileMenuHost> {
    const f = TestBed.createComponent(HeaderMobileMenuHost);
    f.componentInstance.showMobileMenu = showMobile;
    f.detectChanges();
    return f;
  }

  it('should render the hamburger toggler by default (showMobileMenu=true)', () => {
    fixture = createFixture(true);
    const toggler = fixture.nativeElement.querySelector('.custom-navbar-toggler');
    expect(toggler).toBeTruthy();
  });

  it('should render the offcanvas sidebar by default (showMobileMenu=true)', () => {
    fixture = createFixture(true);
    const collapsable = fixture.nativeElement.querySelector('.navbar-collapsable');
    expect(collapsable).toBeTruthy();
  });

  it('should hide the hamburger toggler when showMobileMenu=false', () => {
    fixture = createFixture(false);
    const toggler = fixture.nativeElement.querySelector('.custom-navbar-toggler');
    expect(toggler).toBeNull();
  });

  it('should hide the offcanvas sidebar when showMobileMenu=false', () => {
    fixture = createFixture(false);
    const collapsable = fixture.nativeElement.querySelector('.navbar-collapsable');
    expect(collapsable).toBeNull();
  });

  it('should still render the nav items when showMobileMenu=false', () => {
    fixture = createFixture(false);
    const menuWrapper = fixture.nativeElement.querySelector('.menu-wrapper');
    expect(menuWrapper).toBeTruthy();
  });

  it('should still render the nav items when showMobileMenu=true', () => {
    fixture = createFixture(true);
    const menuWrapper = fixture.nativeElement.querySelector('.menu-wrapper');
    expect(menuWrapper).toBeTruthy();
  });
});
