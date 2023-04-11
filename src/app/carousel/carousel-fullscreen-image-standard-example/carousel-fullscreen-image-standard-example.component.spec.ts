import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFullscreenImageStandardExampleComponent } from './carousel-fullscreen-image-standard-example.component';

describe('CarouselFullscreenImageStandardExampleComponent', () => {
  let component: CarouselFullscreenImageStandardExampleComponent;
  let fixture: ComponentFixture<CarouselFullscreenImageStandardExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselFullscreenImageStandardExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselFullscreenImageStandardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
