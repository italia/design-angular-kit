import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFullscreenImageExampleComponent } from './carousel-fullscreen-image-example.component';

describe('CarouselFullscreenImageExampleComponent', () => {
  let component: CarouselFullscreenImageExampleComponent;
  let fixture: ComponentFixture<CarouselFullscreenImageExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselFullscreenImageExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselFullscreenImageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
