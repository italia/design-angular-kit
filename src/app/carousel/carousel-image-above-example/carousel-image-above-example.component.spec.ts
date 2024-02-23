import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselImageAboveExampleComponent } from './carousel-image-above-example.component';

describe('CarouselImageAboveExampleComponent', () => {
  let component: CarouselImageAboveExampleComponent;
  let fixture: ComponentFixture<CarouselImageAboveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselImageAboveExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselImageAboveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
