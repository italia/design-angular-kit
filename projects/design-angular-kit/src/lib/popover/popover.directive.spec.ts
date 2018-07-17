import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';

import { PopoverDirective } from './popover.directive';
import { PopoverComponent } from './popover.component';
import { DesignAngularKitModule } from '../design-angular-kit.module';

/** Componente per testare una singola popover. */
@Component({
  template: `<button type="button" class="btn btn-lg btn-danger"
    [it-popover]="popoverContent" [it-title]="popoverTitle"
    [it-triggers]="popoverTrigger" [it-placement]="popoverPlacement"
    [it-disabled]="popoverDisableFlag"
    #popoverDirective="it-popover">
    Clicca per attivare/disattivare il popover
  </button>`
})
class SinglePopoverComponent {
  @ViewChild('popoverDirective') popoverDirective: PopoverDirective;
  popoverContent = 'Test del popover';
  popoverTitle = 'Popover da testare';
  popoverTrigger = 'click';
  popoverPlacement = 'right';
  popoverDisableFlag = false;
}

describe('PopoverComponent', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        PopoverComponent,
        PopoverDirective
      ]
    });

    TestBed.compileComponents();
  }));

  it('dovrebbe comparire a destra di default', () => {
    const fixture = TestBed.createComponent(PopoverComponent);

    fixture.componentInstance.title = 'Test title';
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('popover')).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('bs-popover-right')).toBeTruthy();
    expect(fixture.nativeElement.getAttribute('role')).toBe('tooltip');
    expect(fixture.nativeElement.querySelector('.popover-header').textContent).toBe('Test title');
  });

  it('dovrebbe deve comparire a sinistra', () => {
    const fixture = TestBed.createComponent(PopoverComponent);

    fixture.componentInstance.placement = 'left';
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('popover')).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('bs-popover-left')).toBeTruthy();
    expect(fixture.nativeElement.getAttribute('role')).toBe('tooltip');
  });
});

describe('PopoverDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        DesignAngularKitModule
      ],
      declarations: [
        SinglePopoverComponent
      ]
    });
  });

  function getWindow(element) { return element.querySelector('it-popover-window'); }

  it('dovrebbe aprire e chiudere un popover - contenuto e titolo come in SinglePopoverComponent', () => {
    const fixture = TestBed.createComponent(SinglePopoverComponent);
    fixture.detectChanges();

    const directive = fixture.debugElement.query(By.directive(PopoverDirective));

    directive.triggerEventHandler('click', {});
    fixture.detectChanges();

    const windowEl = getWindow(fixture.nativeElement);

    expect(windowEl.classList.contains('popover')).toBeTruthy();
    expect(windowEl.classList.contains('bs-popover-right')).toBeTruthy();
    expect(windowEl.textContent.trim()).toBe('Popover da testareTest del popover');
    expect(windowEl.getAttribute('role')).toBe('tooltip');
    expect(windowEl.getAttribute('id')).toBe('it-popover-0');
    expect(windowEl.parentNode).toBe(fixture.nativeElement);
    expect(directive.nativeElement.getAttribute('aria-describedby')).toBe('it-popover-0');

    directive.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(windowEl.getAttribute('hidden')).toBeDefined();
  });

  it('dovrebbe aprire un popover con un click e chiuderlo con un click fuori dal suo componente', () => {
    const fixture = TestBed.createComponent(SinglePopoverComponent);
    fixture.componentInstance.popoverTrigger = 'focus';
    fixture.detectChanges();

    const directive = fixture.debugElement.query(By.directive(PopoverDirective));

    directive.triggerEventHandler('focus', {});
    fixture.detectChanges();

    const windowEl = getWindow(fixture.nativeElement);

    expect(windowEl.classList.contains('popover')).toBeTruthy();
    expect(windowEl.classList.contains('bs-popover-right')).toBeTruthy();
    expect(windowEl.textContent.trim()).toBe('Popover da testareTest del popover');
    expect(windowEl.getAttribute('role')).toBe('tooltip');
    expect(windowEl.getAttribute('id')).toBe('it-popover-1');
    expect(windowEl.parentNode).toBe(fixture.nativeElement);
    expect(directive.nativeElement.getAttribute('aria-describedby')).toBe('it-popover-1');

    directive.triggerEventHandler('blur', {});
    fixture.detectChanges();

    expect(windowEl.getAttribute('hidden')).toBeDefined();
  });

  it('dovrebbe aprire un popover e cambiarne i collocamenti', () => {
    const fixture = TestBed.createComponent(SinglePopoverComponent);
    fixture.componentInstance.popoverTrigger = 'click';
    fixture.detectChanges();

    const directive = fixture.debugElement.query(By.directive(PopoverDirective));

    directive.triggerEventHandler('click', {});
    fixture.detectChanges();

    const windowEl = getWindow(fixture.nativeElement);

    expect(windowEl.classList.contains('popover')).toBeTruthy();

    expect(windowEl.classList.contains('bs-popover-right')).toBeTruthy();

    fixture.componentInstance.popoverPlacement = 'left';
    fixture.detectChanges();
    expect(windowEl.classList.contains('bs-popover-left')).toBeTruthy();

    fixture.componentInstance.popoverPlacement = 'top';
    fixture.detectChanges();
    expect(windowEl.classList.contains('bs-popover-top')).toBeTruthy();

    fixture.componentInstance.popoverPlacement = 'bottom';
    fixture.detectChanges();
    expect(windowEl.classList.contains('bs-popover-bottom')).toBeTruthy();

    expect(windowEl.textContent.trim()).toBe('Popover da testareTest del popover');
    expect(windowEl.getAttribute('role')).toBe('tooltip');
    expect(windowEl.getAttribute('id')).toBe('it-popover-2');
    expect(windowEl.parentNode).toBe(fixture.nativeElement);
    expect(directive.nativeElement.getAttribute('aria-describedby')).toBe('it-popover-2');

    directive.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(windowEl.getAttribute('hidden')).toBeDefined();
  });

  it('dovrebbe aprire e chiudere un popover rimuovendolo dal DOM, usando il dispose', () => {
    const fixture = TestBed.createComponent(SinglePopoverComponent);
    fixture.detectChanges();

    const directive = fixture.debugElement.query(By.directive(PopoverDirective));

    directive.triggerEventHandler('click', {});
    fixture.detectChanges();

    const windowEl = getWindow(fixture.nativeElement);

    expect(windowEl.getAttribute('id')).toBe('it-popover-3');
    expect(windowEl.parentNode).toBe(fixture.nativeElement);
    expect(directive.nativeElement.getAttribute('aria-describedby')).toBe('it-popover-3');

    fixture.componentInstance.popoverDirective.dispose();
    fixture.detectChanges();

    expect(directive.nativeElement.getAttribute('aria-describedby')).toBeNull();
  });

  it('dovrebbe poter essere disabilitata', () => {
    const fixture = TestBed.createComponent(SinglePopoverComponent);
    fixture.componentInstance.popoverDisableFlag = true;
    fixture.detectChanges();

    const directive = fixture.debugElement.query(By.directive(PopoverDirective));

    directive.triggerEventHandler('click', {});
    fixture.detectChanges();

    const windowEl = getWindow(fixture.nativeElement);
    expect(windowEl).toBeNull();
  });
});
