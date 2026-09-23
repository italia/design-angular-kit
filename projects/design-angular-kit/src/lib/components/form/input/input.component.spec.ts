import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ItInputComponent } from './input.component';
import { tb_base } from '../../../../test';

@Component({
  selector: 'it-input-validation-host',
  standalone: true,
  imports: [ReactiveFormsModule, ItInputComponent],
  template: `
    <form [formGroup]="form">
      <it-input formControlName="name" label="Name" validationMode="only-invalid"></it-input>
    </form>
  `,
})
class ItInputValidationHostComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
}

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

  it('should NOT render aria-describedby when description is not provided', () => {
    component.description = undefined;
    fixture.detectChanges();
    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input');
    expect(inputEl?.getAttribute('aria-describedby')).toBeNull();
  });

  it('should render aria-describedby pointing to description element when description is provided', () => {
    fixture.componentRef.setInput('description', 'Helper text for input');
    fixture.detectChanges();
    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input');
    const descEl = (fixture.nativeElement as HTMLElement).querySelector(`#${component.id}-description`);
    expect(inputEl?.getAttribute('aria-describedby')).toBe(`${component.id}-description`);
    expect(descEl).toBeTruthy();
    expect(descEl?.textContent?.trim()).toBe('Helper text for input');
  });

  it('should render aria-describedby on number input only when description is provided', () => {
    fixture.componentRef.setInput('type', 'number');
    fixture.componentRef.setInput('description', undefined);
    fixture.detectChanges();
    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input[type="number"]');
    expect(inputEl?.getAttribute('aria-describedby')).toBeNull();

    fixture.componentRef.setInput('description', 'Number helper');
    fixture.detectChanges();
    expect(inputEl?.getAttribute('aria-describedby')).toBe(`${component.id}-description`);
  });
});

describe('ItInputComponent — onBlur validation (#588)', () => {
  let fixture: ComponentFixture<ItInputValidationHostComponent>;
  let hostComponent: ItInputValidationHostComponent;

  beforeEach(async () => {
    const config = { ...tb_base, imports: [...(tb_base.imports || []), ItInputValidationHostComponent] };
    await TestBed.configureTestingModule(config).compileComponents();

    fixture = TestBed.createComponent(ItInputValidationHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should NOT show validation error while user is typing (dirty but not touched)', () => {
    const nameCtrl = hostComponent.form.controls.name;

    // Simulate typing (makes control dirty but NOT touched)
    nameCtrl.setValue('ab');
    nameCtrl.markAsDirty();
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const errorDiv = el.querySelector('.form-feedback.just-validate-error-label');
    const invalidInput = el.querySelector('.is-invalid');

    expect(nameCtrl.invalid).toBeTrue();
    expect(nameCtrl.dirty).toBeTrue();
    expect(nameCtrl.touched).toBeFalse();
    expect(errorDiv).toBeNull();
    expect(invalidInput).toBeNull();
  });

  it('should show validation error ONLY after blur (touched)', () => {
    const nameCtrl = hostComponent.form.controls.name;

    // Simulate typing + blur
    nameCtrl.setValue('ab');
    nameCtrl.markAsDirty();
    nameCtrl.markAsTouched();
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const errorDiv = el.querySelector('.form-feedback.just-validate-error-label');
    const invalidInput = el.querySelector('.is-invalid');

    expect(nameCtrl.invalid).toBeTrue();
    expect(nameCtrl.touched).toBeTrue();
    expect(errorDiv).toBeTruthy();
    expect(invalidInput).toBeTruthy();
  });

  it('should NOT show error for a valid field even after blur', () => {
    const nameCtrl = hostComponent.form.controls.name;

    nameCtrl.setValue('Valid Name');
    nameCtrl.markAsDirty();
    nameCtrl.markAsTouched();
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const errorDiv = el.querySelector('.form-feedback.just-validate-error-label');
    const invalidInput = el.querySelector('.is-invalid');

    expect(nameCtrl.valid).toBeTrue();
    expect(errorDiv).toBeNull();
    expect(invalidInput).toBeNull();
  });

  it('should clear validation error when user corrects the value', () => {
    const nameCtrl = hostComponent.form.controls.name;

    // First: invalid + touched → error shown
    nameCtrl.setValue('ab');
    nameCtrl.markAsTouched();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.is-invalid')).toBeTruthy();

    // Then: user corrects → error cleared
    nameCtrl.setValue('Valid Name');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.is-invalid')).toBeNull();
  });
});
