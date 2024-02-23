import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingExampleComponent } from './rating-example.component';

describe('RatingExampleComponent', () => {
  let component: RatingExampleComponent;
  let fixture: ComponentFixture<RatingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
