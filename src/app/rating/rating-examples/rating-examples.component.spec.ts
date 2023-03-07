import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingExamplesComponent } from './rating-examples.component';

describe('RatingExamplesComponent', () => {
  let component: RatingExamplesComponent;
  let fixture: ComponentFixture<RatingExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
