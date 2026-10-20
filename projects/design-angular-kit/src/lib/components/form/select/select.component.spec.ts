import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSelectComponent } from './select.component';
import { tb_base } from '../../../../test';

describe('ItSelectComponent', () => {
  let component: ItSelectComponent;
  let fixture: ComponentFixture<ItSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItSelectComponent);
    component = fixture.componentInstance;
    component.options = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT render aria-describedby when description is not provided', () => {
    component.description = undefined;
    fixture.detectChanges();
    const selectEl = (fixture.nativeElement as HTMLElement).querySelector('select');
    expect(selectEl?.getAttribute('aria-describedby')).toBeNull();
  });

  it('should render aria-describedby when description is provided', () => {
    fixture.componentRef.setInput('description', 'Select a value');
    fixture.detectChanges();
    const selectEl = (fixture.nativeElement as HTMLElement).querySelector('select');
    const descEl = (fixture.nativeElement as HTMLElement).querySelector(`#${component.id}-description`);
    expect(selectEl?.getAttribute('aria-describedby')).toBe(`${component.id}-description`);
    expect(descEl).toBeTruthy();
    expect(descEl?.textContent?.trim()).toBe('Select a value');
  });
});
