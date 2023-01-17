import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutHightlightsComponent } from './callout-hightlights.component';

describe('CalloutHightlightsComponent', () => {
  let component: CalloutHightlightsComponent;
  let fixture: ComponentFixture<CalloutHightlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutHightlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalloutHightlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
