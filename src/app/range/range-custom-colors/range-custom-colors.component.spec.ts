import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeCustomColorsComponent } from './range-custom-colors.component';

describe('RangeCustomColorsComponent', () => {
  let component: RangeCustomColorsComponent;
  let fixture: ComponentFixture<RangeCustomColorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeCustomColorsComponent]
    });
    fixture = TestBed.createComponent(RangeCustomColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
