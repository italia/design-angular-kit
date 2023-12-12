import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRatingComponent } from './rating.component';
import { tb_base } from '../../../../test';

describe('ItRatingComponent', () => {
  let component: ItRatingComponent;
  let fixture: ComponentFixture<ItRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
