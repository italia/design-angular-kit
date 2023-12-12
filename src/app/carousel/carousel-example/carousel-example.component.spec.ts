import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselExampleComponent } from './carousel-example.component';

describe('CarouselExampleComponent', () => {
  let component: CarouselExampleComponent;
  let fixture: ComponentFixture<CarouselExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
