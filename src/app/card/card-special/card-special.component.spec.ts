import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpecialComponent } from './card-special.component';

describe('CardSpecialComponent', () => {
  let component: CardSpecialComponent;
  let fixture: ComponentFixture<CardSpecialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSpecialComponent],
    });
    fixture = TestBed.createComponent(CardSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
