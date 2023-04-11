import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSpecialCardsExampleComponent } from './carousel-special-cards-example.component';

describe('CarouselSpecialCardsExampleComponent', () => {
  let component: CarouselSpecialCardsExampleComponent;
  let fixture: ComponentFixture<CarouselSpecialCardsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSpecialCardsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSpecialCardsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
