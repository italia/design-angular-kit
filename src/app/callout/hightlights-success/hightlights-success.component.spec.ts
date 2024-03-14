import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightsSuccessComponent } from './hightlights-success.component';

describe('HightlightsSuccessComponent', () => {
  let component: HightlightsSuccessComponent;
  let fixture: ComponentFixture<HightlightsSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HightlightsSuccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HightlightsSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
