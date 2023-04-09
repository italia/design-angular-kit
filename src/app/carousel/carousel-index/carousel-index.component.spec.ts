import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselIndexComponent } from './carousel-index.component';

describe('CarouselIndexComponent', () => {
  let component: CarouselIndexComponent;
  let fixture: ComponentFixture<CarouselIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
