import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeIndexComponent } from './range-index.component';

describe('RangeIndexComponent', () => {
  let component: RangeIndexComponent;
  let fixture: ComponentFixture<RangeIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeIndexComponent]
    });
    fixture = TestBed.createComponent(RangeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
