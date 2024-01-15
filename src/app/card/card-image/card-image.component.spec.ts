import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageComponent } from './card-image.component';

describe('CardImageComponent', () => {
  let component: CardImageComponent;
  let fixture: ComponentFixture<CardImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardImageComponent]
    });
    fixture = TestBed.createComponent(CardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
