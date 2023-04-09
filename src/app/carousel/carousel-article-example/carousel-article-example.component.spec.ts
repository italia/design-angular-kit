import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselArticleExampleComponent } from './carousel-article-example.component';

describe('CarouselArticleExampleComponent', () => {
  let component: CarouselArticleExampleComponent;
  let fixture: ComponentFixture<CarouselArticleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselArticleExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselArticleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
