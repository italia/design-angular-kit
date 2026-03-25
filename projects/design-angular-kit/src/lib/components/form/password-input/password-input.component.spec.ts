import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItPasswordInputComponent } from './password-input.component';
import { tb_base } from '../../../../test';

describe('ItPasswordInputComponent', () => {
  let component: ItPasswordInputComponent;
  let fixture: ComponentFixture<ItPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT render aria-describedby when description is undefined', () => {
    component.description = undefined;
    fixture.detectChanges();
    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input[type="password"]');
    expect(inputEl?.getAttribute('aria-describedby')).toBeNull();
  });

  it('should render aria-describedby when description is provided', () => {
    fixture.componentRef.setInput('description', 'Password requirements');
    fixture.detectChanges();
    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input[type="password"]');
    expect(inputEl?.getAttribute('aria-describedby')).toBe(`${component.id}-description`);
  });
});
