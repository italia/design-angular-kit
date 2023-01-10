import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutBigTextComponent } from './callout-big-text.component';

describe('CalloutBigTextComponent', () => {
  let component: CalloutBigTextComponent;
  let fixture: ComponentFixture<CalloutBigTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutBigTextComponent ]
    })
    .overrideComponent(CalloutBigTextComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutBigTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
