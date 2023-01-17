import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutApprofondimentoComponent } from './callout-approfondimento.component';

describe('CalloutApprofondimentoComponent', () => {
  let component: CalloutApprofondimentoComponent;
  let fixture: ComponentFixture<CalloutApprofondimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutApprofondimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutApprofondimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
