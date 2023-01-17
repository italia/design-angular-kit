import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutWarningComponent } from './callout-warning.component';

describe('CalloutWarningComponent', () => {
  let component: CalloutWarningComponent;
  let fixture: ComponentFixture<CalloutWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
