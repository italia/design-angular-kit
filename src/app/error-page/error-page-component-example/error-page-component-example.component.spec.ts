import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageComponentExampleComponent } from './error-page-component-example.component';

describe('ErrorPageComponentExampleComponent', () => {
  let component: ErrorPageComponentExampleComponent;
  let fixture: ComponentFixture<ErrorPageComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorPageComponentExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorPageComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
