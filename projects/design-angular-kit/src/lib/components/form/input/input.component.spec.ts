import { ComponentFixture, TestBed } from '@angular/core/testing';

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
