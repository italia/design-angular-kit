import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeExamplesComponent } from './range-examples.component';

describe('RangeExamplesComponent', () => {
  let component: RangeExamplesComponent;
  let fixture: ComponentFixture<RangeExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeExamplesComponent],
    });
    fixture = TestBed.createComponent(RangeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
