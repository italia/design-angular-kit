import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ItInputComponent } from './input.component';
import { tb_base } from '../../../../test';

@Component({
  selector: 'it-input-errors-host',
  standalone: true,
  imports: [ReactiveFormsModule, ItInputComponent],
  template: `
    <form [formGroup]="form">
      <it-input formControlName="email" label="Email" [validationMode]="true"></it-input>
    </form>
  `,
})
class ItInputErrorsHostComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}

describe('ItInputComponent - error delegation (#572)', () => {
  let fixture: ComponentFixture<ItInputErrorsHostComponent>;
  let host: ItInputErrorsHostComponent;
  let component: ItInputComponent;
  let ngControl: NgControl;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...(tb_base.imports || []), ItInputErrorsHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItInputErrorsHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(By.directive(ItInputComponent));
    component = inputElement.componentInstance as ItInputComponent;
    ngControl = inputElement.injector.get(NgControl);
  });

  it('should not throw when rendering a required error', () => {
    host.form.controls.email.markAsTouched();
    host.form.controls.email.setValue('');

    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('should report the required error from the parent control', () => {
    host.form.controls.email.markAsTouched();
    host.form.controls.email.setValue('');
    fixture.detectChanges();

    expect(component.hasError('required')).toBeTrue();
  });

  it('should report the email error without reporting a required error', () => {
    host.form.controls.email.markAsTouched();
    host.form.controls.email.setValue('not-an-email');
    fixture.detectChanges();

    expect(component.hasError('email')).toBeTrue();
    expect(component.hasError('required')).toBeFalse();
  });

  it('should return error details from the parent control', () => {
    const details = { reason: 'Email address is already registered' };
    host.form.controls.email.setErrors({ duplicate: details });

    expect(component.hasError('duplicate')).toBeTrue();
    expect(component.getError('duplicate')).toEqual(details);
  });

  it('should report no errors when the value is valid', () => {
    host.form.controls.email.markAsTouched();
    host.form.controls.email.setValue('user@example.com');
    fixture.detectChanges();

    expect(component.hasError('required')).toBeFalse();
    expect(component.hasError('email')).toBeFalse();
    expect(component.getError('email')).toBeNull();
  });

  it('should not call the error helper methods on the NgControl wrapper', () => {
    const hasError = spyOn(ngControl, 'hasError').and.throwError('NgControl.hasError must not be called');
    const getError = spyOn(ngControl, 'getError').and.throwError('NgControl.getError must not be called');
    host.form.controls.email.markAsTouched();

    expect(() => fixture.detectChanges()).not.toThrow();
    expect(component.hasError('required')).toBeTrue();
    expect(component.getError('required')).toBeTrue();
    expect(hasError).not.toHaveBeenCalled();
    expect(getError).not.toHaveBeenCalled();
  });
});
