import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTopExamplesComponent } from './back-to-top-examples.component';

describe('BackButtonExamplesComponent', () => {
  let component: BackToTopExamplesComponent;
  let fixture: ComponentFixture<BackToTopExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackToTopExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackToTopExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
