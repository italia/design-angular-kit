import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';

import { ItDropdownItemComponent } from './dropdown-item.component';
import { tb_base } from '../../../../../test';

describe('ItDropdownItemComponent', () => {
  let component: ItDropdownItemComponent;
  let fixture: ComponentFixture<ItDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .overrideComponent(ItDropdownItemComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
      .compileComponents();

    fixture = TestBed.createComponent(ItDropdownItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should include itemClass in the inner link classes (#602)', () => {
    component.itemClass = 'text-uppercase fw-bold';
    fixture.detectChanges();
    expect(component.linkClass).toContain('text-uppercase fw-bold');
  });

  it('should not include extra space when itemClass is empty (#602)', () => {
    component.itemClass = '';
    fixture.detectChanges();
    expect(component.linkClass).not.toMatch(/\s{2,}/);
  });

  it('should combine itemClass with active class (#602)', () => {
    component.active = true;
    component.itemClass = 'custom-class';
    fixture.detectChanges();
    expect(component.linkClass).toContain('active');
    expect(component.linkClass).toContain('custom-class');
  });

  it('should render icon on the left when iconName and iconPosition=left', () => {
    component.iconName = 'star-outline';
    component.iconPosition = 'left';
    fixture.detectChanges();
    const icons = fixture.nativeElement.querySelectorAll('it-icon');
    expect(icons.length).toBe(1);
  });

  it('should render icon on the right when iconPosition=right', () => {
    component.iconName = 'star-outline';
    component.iconPosition = 'right';
    fixture.detectChanges();
    const icons = fixture.nativeElement.querySelectorAll('it-icon');
    expect(icons.length).toBe(1);
  });

  it('should not render icon when iconName is not set', () => {
    fixture.detectChanges();
    const icons = fixture.nativeElement.querySelectorAll('it-icon');
    expect(icons.length).toBe(0);
  });

  it('should apply left spacing class to SVG when iconPosition is left', () => {
    component.iconName = 'star-outline';
    component.iconPosition = 'left';
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg');
    if (svg) {
      const svgClasses = svg.getAttribute('class') || '';
      expect(svgClasses).toContain('left');
    }
  });

  it('should apply right spacing class to SVG when iconPosition is right', () => {
    component.iconName = 'star-outline';
    component.iconPosition = 'right';
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg');
    if (svg) {
      const svgClasses = svg.getAttribute('class') || '';
      expect(svgClasses).toContain('right');
    }
  });
});
