import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutDangerComponent } from './callout-danger.component';

describe('CalloutDangerComponent', () => {
  let component: CalloutDangerComponent;
  let fixture: ComponentFixture<CalloutDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutDangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
