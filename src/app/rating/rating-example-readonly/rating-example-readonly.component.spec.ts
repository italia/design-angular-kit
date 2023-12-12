import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingExampleReadonlyComponent } from './rating-example-readonly.component';

describe('RatingExampleReadonlyComponent', () => {
  let component: RatingExampleReadonlyComponent;
  let fixture: ComponentFixture<RatingExampleReadonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingExampleReadonlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingExampleReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
