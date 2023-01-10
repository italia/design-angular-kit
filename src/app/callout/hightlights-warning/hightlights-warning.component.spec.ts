import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightsWarningComponent } from './hightlights-warning.component';

describe('HightlightsWarningComponent', () => {
  let component: HightlightsWarningComponent;
  let fixture: ComponentFixture<HightlightsWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightlightsWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HightlightsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
