import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExampleComponent } from './card-example.component';

describe('CardExampleComponent', () => {
  let component: CardExampleComponent;
  let fixture: ComponentFixture<CardExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardExampleComponent]
    });
    fixture = TestBed.createComponent(CardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
