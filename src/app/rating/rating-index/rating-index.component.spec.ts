import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingIndexComponent } from './rating-index.component';

describe('RatingIndexComponent', () => {
  let component: RatingIndexComponent;
  let fixture: ComponentFixture<RatingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
