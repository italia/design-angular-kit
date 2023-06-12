import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCarouselComponent } from './carousel.component';
import { tb_base } from '../../../../../test';

describe('ItCarouselComponent', () => {
  let component: ItCarouselComponent;
  let fixture: ComponentFixture<ItCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
