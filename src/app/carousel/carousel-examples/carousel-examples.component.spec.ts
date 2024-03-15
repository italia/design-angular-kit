import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselExamplesComponent } from './carousel-examples.component';

describe('CarouselExamplesComponent', () => {
  let component: CarouselExamplesComponent;
  let fixture: ComponentFixture<CarouselExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
