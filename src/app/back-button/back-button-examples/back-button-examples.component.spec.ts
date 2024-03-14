import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonExamplesComponent } from './back-button-examples.component';

describe('BackButtonExamplesComponent', () => {
  let component: BackButtonExamplesComponent;
  let fixture: ComponentFixture<BackButtonExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackButtonExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackButtonExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
