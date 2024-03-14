import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCarouselItemComponent } from './carousel-item.component';

describe('ItCarouselItemComponent', () => {
  let component: ItCarouselItemComponent;
  let fixture: ComponentFixture<ItCarouselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItCarouselItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
