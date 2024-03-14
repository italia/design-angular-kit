import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFeaturedImageExampleComponent } from './carousel-featured-image-example.component';

describe('CarouselFeaturedImageExampleComponent', () => {
  let component: CarouselFeaturedImageExampleComponent;
  let fixture: ComponentFixture<CarouselFeaturedImageExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselFeaturedImageExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselFeaturedImageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
