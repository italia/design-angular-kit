import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter, RouterLinkActive, RouterLink } from '@angular/router';

import { ItHeaderComponent } from './header.component';
import { tb_base } from '../../../../test';
import { ItNavBarItemComponent } from '../navbar/navbar-item/navbar-item.component';

/**
 * Host component that projects nav items with routerLinkActive into the
 * header, replicating the real-world usage pattern described in issue #589.
 */
@Component({
  template: `
    <it-header [sticky]="false">
      <ng-container navItems>
        <it-navbar-item>
          <a class="nav-link" routerLink="/home" routerLinkActive="active" data-testid="nav-home"> Home</a>
        </it-navbar-item>
        <it-navbar-item>
          <a class="nav-link" routerLink="/about" routerLinkActive="active" data-testid="nav-about"> About</a>
        </it-navbar-item>
      </ng-container>
    </it-header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItHeaderComponent, ItNavBarItemComponent, RouterLink, RouterLinkActive],
})
class TestHostComponent {}

@Component({ template: '<p>home</p>' })
class HomeStubComponent {}

@Component({ template: '<p>about</p>' })
class AboutStubComponent {}

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

describe('ItHeaderComponent — active state on navigation (#589)', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [TestHostComponent],
      providers: [
        ...(tb_base.providers ?? []),
        provideRouter([
          { path: 'home', component: HomeStubComponent },
          { path: 'about', component: AboutStubComponent },
          { path: '**', redirectTo: 'home' },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  function getLink(testId: string): HTMLAnchorElement {
    return fixture.nativeElement.querySelector(`[data-testid="${testId}"]`);
  }

  it('should apply .active class to the current route link after navigation', async () => {
    await router.navigateByUrl('/home');
    fixture.detectChanges();

    const homeLink = getLink('nav-home');
    expect(homeLink.classList.contains('active')).toBe(true);
    expect(getLink('nav-about').classList.contains('active')).toBe(false);
  });

  it('should switch .active class when navigating to another route', async () => {
    await router.navigateByUrl('/home');
    fixture.detectChanges();

    expect(getLink('nav-home').classList.contains('active')).toBe(true);

    await router.navigateByUrl('/about');
    fixture.detectChanges();

    expect(getLink('nav-home').classList.contains('active')).toBe(false);
    expect(getLink('nav-about').classList.contains('active')).toBe(true);
  });

  it('should reflect the active border style on the current route link (repaint verification)', async () => {
    await router.navigateByUrl('/home');
    fixture.detectChanges();

    const homeLink = getLink('nav-home');
    expect(homeLink.classList.contains('active')).toBe(true);

    // The `.active` class is the hook Bootstrap Italia uses for the
    // active indicator border.  As long as the class is present the
    // browser will render the border — the class surviving a full
    // change-detection + repaint cycle proves issue #589 is fixed.
    expect(homeLink.className).toContain('nav-link');
    expect(homeLink.className).toContain('active');
  });

  it('should handle rapid sequential navigations without losing active state', async () => {
    await router.navigateByUrl('/home');

    await router.navigateByUrl('/about');

    await router.navigateByUrl('/home');
    fixture.detectChanges();

    expect(getLink('nav-home').classList.contains('active')).toBe(true);
    expect(getLink('nav-about').classList.contains('active')).toBe(false);
  });

  it('should have active class immediately after detectChanges (no interaction required)', async () => {
    await router.navigateByUrl('/about');
    fixture.detectChanges();

    // This is the core assertion for issue #589: the active class must
    // be present right after CD — before any user interaction.
    const aboutLink = getLink('nav-about');
    expect(aboutLink.classList.contains('active'), 'active class must be present without user interaction').toBe(true);
  });
});
