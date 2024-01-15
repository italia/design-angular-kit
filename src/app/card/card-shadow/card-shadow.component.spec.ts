import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShadowComponent } from './card-shadow.component';

describe('CardShadowComponent', () => {
  let component: CardShadowComponent;
  let fixture: ComponentFixture<CardShadowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardShadowComponent]
    });
    fixture = TestBed.createComponent(CardShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
