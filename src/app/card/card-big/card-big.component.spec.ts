import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBigComponent } from './card-big.component';

describe('CardBigComponent', () => {
  let component: CardBigComponent;
  let fixture: ComponentFixture<CardBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBigComponent]
    });
    fixture = TestBed.createComponent(CardBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
