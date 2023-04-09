import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputValidationExampleComponent } from './password-input-validation-example.component';

describe('PasswordInputValidationExampleComponent', () => {
  let component: PasswordInputValidationExampleComponent;
  let fixture: ComponentFixture<PasswordInputValidationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordInputValidationExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordInputValidationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
