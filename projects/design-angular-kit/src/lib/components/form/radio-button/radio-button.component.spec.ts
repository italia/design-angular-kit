import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRadioButtonComponent } from './radio-button.component';
import { tb_base } from '../../../../test';

describe('ItRadioButtonComponent', () => {
  let component: ItRadioButtonComponent;
  let fixture: ComponentFixture<ItRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT render aria-describedby when group is false', () => {
    component.group = false;
    fixture.detectChanges();
    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input[type="radio"]');
    expect(inputEl?.getAttribute('aria-describedby')).toBeNull();
  });

  it('should render aria-describedby when group is true', () => {
    fixture.componentRef.setInput('group', true);
    fixture.detectChanges();
    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input[type="radio"]');
    expect(inputEl?.getAttribute('aria-describedby')).toBe(`${component.id}-help`);
  });
});
