import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTeaserComponent } from './card-teaser.component';

describe('CardTeaserComponent', () => {
  let component: CardTeaserComponent;
  let fixture: ComponentFixture<CardTeaserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTeaserComponent],
    });
    fixture = TestBed.createComponent(CardTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
