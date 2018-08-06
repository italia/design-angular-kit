import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';

import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip.component';
import { DesignAngularKitModule } from '../design-angular-kit.module';

/** Componente per testare una singola tooltip. */
@Component({
  template: `<button type="button" class="btn btn-lg btn-danger"
    [it-tooltip]="tooltipContent"
    [placement]="tooltipPlacement"
    [disabled]="tooltipDisableFlag"
    #tooltipDirective="it-tooltip">
    Clicca per attivare/disattivare il tooltip
  </button>`
})
class SingleTooltipComponent {
  @ViewChild('tooltipDirective') tooltipDirective: TooltipDirective;
  tooltipContent = 'Test del tooltip';
  tooltipPlacement = 'right';
  tooltipDisableFlag = false;
}

describe('TooltipComponent', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        TooltipComponent,
        TooltipDirective
      ]
    });

    TestBed.compileComponents();
  }));

  it('dovrebbe comparire a destra di default', () => {
    const fixture = TestBed.createComponent(TooltipComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('tooltip')).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('bs-tooltip-right')).toBeTruthy();
    expect(fixture.nativeElement.getAttribute('role')).toBe('tooltip');
  });

  it('dovrebbe deve comparire a sinistra', () => {
    const fixture = TestBed.createComponent(TooltipComponent);

    fixture.componentInstance.placement = 'left';
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('tooltip')).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('bs-tooltip-left')).toBeTruthy();
    expect(fixture.nativeElement.getAttribute('role')).toBe('tooltip');
  });
});

describe('TooltipDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        DesignAngularKitModule
      ],
      declarations: [
        SingleTooltipComponent
      ]
    });
  });

  function getWindow(element) { return element.querySelector('it-tooltip-window'); }

  it('dovrebbe aprire e chiudere un tooltip - contenuto e titolo come in SingleTooltipComponent', () => {
    const fixture = TestBed.createComponent(SingleTooltipComponent);
    fixture.detectChanges();

    const directive = fixture.debugElement.query(By.directive(TooltipDirective));

    directive.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    const windowEl = getWindow(fixture.nativeElement);

    expect(windowEl.classList.contains('tooltip')).toBeTruthy();
    expect(windowEl.classList.contains('bs-tooltip-right')).toBeTruthy();
    expect(windowEl.textContent.trim()).toBe('Test del tooltip');
    expect(windowEl.getAttribute('role')).toBe('tooltip');
    expect(windowEl.getAttribute('id')).toBe('it-tooltip-0');
    expect(windowEl.parentNode).toBe(fixture.nativeElement);
    expect(directive.nativeElement.getAttribute('aria-describedby')).toBe('it-tooltip-0');

    directive.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();

    expect(windowEl.getAttribute('hidden')).toBeDefined();
  });

  it('dovrebbe aprire un tooltip e cambiarne i collocamenti', () => {
    const fixture = TestBed.createComponent(SingleTooltipComponent);
    fixture.detectChanges();

    const directive = fixture.debugElement.query(By.directive(TooltipDirective));

    directive.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    const windowEl = getWindow(fixture.nativeElement);

    expect(windowEl.classList.contains('tooltip')).toBeTruthy();

    expect(windowEl.classList.contains('bs-tooltip-right')).toBeTruthy();

    fixture.componentInstance.tooltipPlacement = 'left';
    fixture.detectChanges();
    expect(windowEl.classList.contains('bs-tooltip-left')).toBeTruthy();

    fixture.componentInstance.tooltipPlacement = 'top';
    fixture.detectChanges();
    expect(windowEl.classList.contains('bs-tooltip-top')).toBeTruthy();

    fixture.componentInstance.tooltipPlacement = 'bottom';
    fixture.detectChanges();
    expect(windowEl.classList.contains('bs-tooltip-bottom')).toBeTruthy();

    expect(windowEl.textContent.trim()).toBe('Test del tooltip');
    expect(windowEl.getAttribute('role')).toBe('tooltip');
    expect(windowEl.getAttribute('id')).toBe('it-tooltip-1');
    expect(windowEl.parentNode).toBe(fixture.nativeElement);
    expect(directive.nativeElement.getAttribute('aria-describedby')).toBe('it-tooltip-1');

    directive.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();

    expect(windowEl.getAttribute('hidden')).toBeDefined();
  });

  it('dovrebbe aprire e chiudere un tooltip rimuovendolo dal DOM, usando il dispose', () => {
    const fixture = TestBed.createComponent(SingleTooltipComponent);
    fixture.detectChanges();

    const directive = fixture.debugElement.query(By.directive(TooltipDirective));

    directive.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    const windowEl = getWindow(fixture.nativeElement);

    expect(windowEl.getAttribute('id')).toBe('it-tooltip-2');
    expect(windowEl.parentNode).toBe(fixture.nativeElement);
    expect(directive.nativeElement.getAttribute('aria-describedby')).toBe('it-tooltip-2');

    fixture.componentInstance.tooltipDirective.dispose();
    fixture.detectChanges();

    expect(directive.nativeElement.getAttribute('aria-describedby')).toBeNull();
  });

  it('dovrebbe poter essere disabilitata', () => {
    const fixture = TestBed.createComponent(SingleTooltipComponent);
    fixture.componentInstance.tooltipDisableFlag = true;
    fixture.detectChanges();

    const directive = fixture.debugElement.query(By.directive(TooltipDirective));

    directive.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    const windowEl = getWindow(fixture.nativeElement);
    expect(windowEl).toBeNull();
  });
});
