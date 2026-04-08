import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ItInputComponent } from './input.component';
import { tb_base } from '../../../../test';

describe('ItInputComponent', () => {
  let component: ItInputComponent;
  let fixture: ComponentFixture<ItInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  template: `
    <form [formGroup]="form">
      <it-input formControlName="email" label="Email" [validationMode]="true"></it-input>
    </form>
  `,
  imports: [ReactiveFormsModule, ItInputComponent],
})
class TestHostComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}

describe('ItInputComponent — Signal Forms compatibility (#572)', () => {
  let host: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...tb_base.imports, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not throw when calling hasError via NgControl', () => {
    const control = host.form.get('email')!;
    control.markAsTouched();
    control.setValue('');
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('should correctly report required error via hasError', () => {
    const control = host.form.get('email')!;
    control.markAsTouched();
    control.setValue('');
    fixture.detectChanges();

    const inputEl = fixture.debugElement.children[0].children[0];
    const inputComp = inputEl.componentInstance as ItInputComponent;
    expect(inputComp.hasError('required')).toBeTrue();
  });

  it('should correctly report email error via hasError', () => {
    const control = host.form.get('email')!;
    control.markAsTouched();
    control.setValue('not-an-email');
    fixture.detectChanges();

    const inputEl = fixture.debugElement.children[0].children[0];
    const inputComp = inputEl.componentInstance as ItInputComponent;
    expect(inputComp.hasError('email')).toBeTrue();
    expect(inputComp.hasError('required')).toBeFalse();
  });

  it('should return error details via getError', () => {
    const control = host.form.get('email')!;
    control.markAsTouched();
    control.setValue('ab');
    fixture.detectChanges();

    const inputEl = fixture.debugElement.children[0].children[0];
    const inputComp = inputEl.componentInstance as ItInputComponent;
    const emailErr = inputComp.getError('email');
    expect(emailErr).toBeTruthy();
  });

  it('should report no errors when value is valid', () => {
    const control = host.form.get('email')!;
    control.markAsTouched();
    control.setValue('user@example.com');
    fixture.detectChanges();

    const inputEl = fixture.debugElement.children[0].children[0];
    const inputComp = inputEl.componentInstance as ItInputComponent;
    expect(inputComp.hasError('required')).toBeFalse();
    expect(inputComp.hasError('email')).toBeFalse();
  });
});
