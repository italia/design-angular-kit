import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageExamplesComponent } from './error-page-examples.component';

describe('ErrorPageExamplesComponent', () => {
  let component: ErrorPageExamplesComponent;
  let fixture: ComponentFixture<ErrorPageExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorPageExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorPageExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
