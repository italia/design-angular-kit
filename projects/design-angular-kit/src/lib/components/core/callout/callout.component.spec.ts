import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconComponent } from '../../utils/icon/icon.component';

import { CalloutComponent } from './callout.component';

describe('CalloutComponent', () => {
  let component: CalloutComponent;
  let fixture: ComponentFixture<CalloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutComponent, IconComponent ]
    })
    .overrideComponent(CalloutComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if i set a color, that class will be on div with class callout', fakeAsync(() => {
    component.color = 'note';
    fixture.detectChanges();
    const divPrimaryElement = fixture.debugElement.query(By.css('div.callout.note'));
    expect(divPrimaryElement).toBeTruthy();
  }));

  it('if i set a appearance, that class will be on div with class callout with prefix callout-*', () => {
    component.appearance = 'more';
    fixture.detectChanges();
    const divPrimaryElement = fixture.debugElement.query(By.css('div.callout.' + 'callout-' + 'more'));
    expect(divPrimaryElement).toBeTruthy();
  });
});
