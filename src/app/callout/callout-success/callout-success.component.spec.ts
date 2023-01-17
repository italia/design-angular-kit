import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutSuccessComponent } from './callout-success.component';

describe('CalloutSuccessComponent', () => {
  let component: CalloutSuccessComponent;
  let fixture: ComponentFixture<CalloutSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
