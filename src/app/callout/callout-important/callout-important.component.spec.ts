import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutImportantComponent } from './callout-important.component';

describe('CalloutImportantComponent', () => {
  let component: CalloutImportantComponent;
  let fixture: ComponentFixture<CalloutImportantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalloutImportantComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalloutImportantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
