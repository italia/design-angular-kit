import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIconComponent } from './card-icon.component';

describe('CardIconComponent', () => {
  let component: CardIconComponent;
  let fixture: ComponentFixture<CardIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardIconComponent]
    });
    fixture = TestBed.createComponent(CardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
