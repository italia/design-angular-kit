import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';

import { ItDropdownComponent } from './dropdown.component';
import { tb_base } from '../../../../../test';

describe('ItDropdownComponent', () => {
  let component: ItDropdownComponent;
  let fixture: ComponentFixture<ItDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .overrideComponent(ItDropdownComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
      .compileComponents();

    fixture = TestBed.createComponent(ItDropdownComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should generate btn-dropdown when no color is set', () => {
    fixture.detectChanges();
    expect(component.buttonClass).toContain('btn-dropdown');
  });

  it('should generate btn-primary class for solid color', () => {
    component.color = 'primary';
    fixture.detectChanges();
    expect(component.buttonClass).toContain('btn-primary');
    expect(component.buttonClass).not.toContain('btn-dropdown');
  });

  it('should generate btn-outline-primary class for outlined variant', () => {
    component.color = 'outline-primary';
    fixture.detectChanges();
    expect(component.buttonClass).toContain('btn-outline-primary');
  });

  it('should generate btn-outline-secondary class for outlined secondary', () => {
    component.color = 'outline-secondary';
    fixture.detectChanges();
    expect(component.buttonClass).toContain('btn-outline-secondary');
  });

  it('should use "primary" icon color for outlined variants (transparent background)', () => {
    component.color = 'outline-primary';
    fixture.detectChanges();
    expect(component.expandIconColor).toBe('primary');
  });

  it('should use "light" icon color for solid variants (colored background)', () => {
    component.color = 'primary';
    fixture.detectChanges();
    expect(component.expandIconColor).toBe('light');
  });

  it('should use "primary" icon color when no color is set', () => {
    fixture.detectChanges();
    expect(component.expandIconColor).toBe('primary');
  });

  it('should detect outline variants correctly', () => {
    component.color = 'outline-danger';
    expect(component.isOutlineVariant).toBeTrue();

    component.color = 'danger';
    expect(component.isOutlineVariant).toBeFalse();

    component.color = undefined;
    expect(component.isOutlineVariant).toBeFalse();
  });
});
