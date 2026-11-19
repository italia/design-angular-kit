import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { tb_base } from '../../../../test';
import { ItCalloutComponent } from './callout.component';

describe('ItCalloutComponent', () => {
  let component: ItCalloutComponent;
  let fixture: ComponentFixture<ItCalloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .overrideComponent(ItCalloutComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ItCalloutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if i set a color, that class will be on div with class callout', () => {
    component.color = 'note';
    fixture.detectChanges();
    const divPrimaryElement = fixture.debugElement.query(By.css('div.callout.note'));
    expect(divPrimaryElement).toBeTruthy();
  });

  it('if i set a appearance, that class will be on div with class callout with prefix callout-*', () => {
    component.appearance = 'more';
    fixture.detectChanges();
    const divPrimaryElement = fixture.debugElement.query(By.css('div.callout.' + 'callout-' + 'more'));
    expect(divPrimaryElement).toBeTruthy();
  });

  it('if i set a label, that can be on DOM', () => {
    component.label = 'label';
    fixture.detectChanges();
    const spanPrimaryElement = fixture.debugElement.query(By.css('.callout-title >  span:not(.visually-hidden)'));
    expect(spanPrimaryElement).toBeTruthy();
  });

  it("if i don't set a label, that cannot be on DOM", () => {
    const spanPrimaryElement = fixture.debugElement.query(By.css('.callout-title > span:not(.visually-hidden)'));
    expect(spanPrimaryElement).toBeFalsy();
  });

  it('if i set a hiddenLabel (with a label), that can be on DOM', () => {
    component.hiddenLabel = 'hiddenLabel';
    component.label = 'label';
    fixture.detectChanges();
    const spanPrimaryElement = fixture.debugElement.query(By.css('.callout-title > span.visually-hidden'));
    expect(spanPrimaryElement).toBeTruthy();
  });

  it("if i don't set a hiddenLabel (with a label), that cannot be on DOM", () => {
    component.label = 'label';
    fixture.detectChanges();
    const spanPrimaryElement = fixture.debugElement.query(By.css('.callout-title > span.visually-hidden'));
    expect(spanPrimaryElement).toBeFalsy();
  });

  it('if i set a hiddenLabel (without a label), that cannot be on DOM', () => {
    component.hiddenLabel = 'hiddenLabel';
    fixture.detectChanges();
    const spanPrimaryElement = fixture.debugElement.query(By.css('.callout-title > span.visually-hidden'));
    expect(spanPrimaryElement).toBeFalsy();
  });

  it('if i set a icon (zoom-in), that will be on DOM', () => {
    component.label = 'label';
    component.icon = 'zoom-in';
    fixture.detectChanges();
    const useElement = fixture.debugElement.query(By.css('use[href="./bootstrap-italia/dist/svg/sprites.svg#it-zoom-in'));
    expect(useElement).toBeTruthy();
  });

  it("if i don't set a icon (with a label), that will be on DOM (default is info-circle)", () => {
    component.label = 'label';
    fixture.detectChanges();
    const useElement = fixture.debugElement.query(By.css('use[href="./bootstrap-italia/dist/svg/sprites.svg#it-info-circle'));
    expect(useElement).toBeTruthy();
  });

  it('if i set appearance to more with a label, the component show icon: zoom-in', () => {
    component.appearance = 'more';
    component.label = 'label';
    fixture.detectChanges();
    const useElement = fixture.debugElement.query(By.css('use[href="./bootstrap-italia/dist/svg/sprites.svg#it-zoom-in'));
    expect(useElement).toBeTruthy();
  });

  it.each([
    ['success', 'check-circle'],
    ['warning', 'help-circle'],
    ['danger', 'close-circle'],
    ['important', 'info-circle'],
    ['note', 'info-circle'],
  ] as const)('if i set color to %s with a label, the component show icon: %s', (color, iconName) => {
    component.color = color;
    component.label = 'label';
    fixture.detectChanges();
    const useElement = fixture.debugElement.query(By.css(`use[href="./bootstrap-italia/dist/svg/sprites.svg#it-${iconName}"]`));
    expect(useElement).toBeTruthy();
  });
});
