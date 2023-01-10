import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconComponent } from '../../../utils/icon/icon.component';

import { CalloutHeaderComponent } from './callout-header.component';

describe('CalloutHeaderComponent', () => {
  let component: CalloutHeaderComponent;
  let fixture: ComponentFixture<CalloutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutHeaderComponent, IconComponent ]
    })
    .overrideComponent(CalloutHeaderComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if i set a label, that can be on DOM', () => {
    component.label = 'label';
    fixture.detectChanges();
    const spanPrimaryElement = fixture.debugElement.query(By.css('span:not(.visually-hidden)'));
    expect(spanPrimaryElement).toBeTruthy();
  });

  it('if i don\'t set a label, that cannot be on DOM', () => {
    const spanPrimaryElement = fixture.debugElement.query(By.css('span:not(.visually-hidden)'));
    expect(spanPrimaryElement).toBeFalsy();
  });

  it('if i set a hiddenLabel, that can be on DOM', () => {
    component.hiddenLabel = 'hiddenLabel';
    fixture.detectChanges();
    const spanPrimaryElement = fixture.debugElement.query(By.css('span.visually-hidden'));
    expect(spanPrimaryElement).toBeTruthy();
  });

  it('if i don\'t set a hiddenLabel, that cannot be on DOM', () => {
    const spanPrimaryElement = fixture.debugElement.query(By.css('span.visually-hidden'));
    expect(spanPrimaryElement).toBeFalsy();
  });

  it('if i set a icon, that can be on DOM', () => {
    component.iconName = 'help-circle';
    fixture.detectChanges();
    const svgPrimaryElement = fixture.debugElement.query(By.css('it-icon'));
    expect(svgPrimaryElement).toBeTruthy();
  });

  it('if i don\'tset a icon, that cannot be on DOM', () => {
    const svgPrimaryElement = fixture.debugElement.query(By.css('it-icon'));
    expect(svgPrimaryElement).toBeFalsy();
  });
});
