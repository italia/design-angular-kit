import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputComponent } from './form-input.component';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthMeterComponent } from './password-strength-meter.component';

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ FormInputComponent, PasswordStrengthMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
