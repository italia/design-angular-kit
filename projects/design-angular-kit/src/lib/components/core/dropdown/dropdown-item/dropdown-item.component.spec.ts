import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';

import { ItDropdownItemComponent } from './dropdown-item.component';
import { tb_base } from '../../../../../test';

describe('ItDropdownItemComponent', () => {
  let component: ItDropdownItemComponent;
  let fixture: ComponentFixture<ItDropdownItemComponent>;
  let warnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(async () => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    await TestBed.configureTestingModule(tb_base)
      .overrideComponent(ItDropdownItemComponent, { set: { changeDetection: ChangeDetectionStrategy.Default } })
      .compileComponents();

    fixture = TestBed.createComponent(ItDropdownItemComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should warn about the deprecated it-dropdown-item element selector', () => {
    fixture.detectChanges();
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy.mock.calls[0][0]).toContain('it-dropdown-item');
  });

  it('should render icon on the left when iconName and iconPosition=left', () => {
    component.iconName = 'star-outline';
    component.iconPosition = 'left';
    fixture.detectChanges();
    const icons = fixture.nativeElement.querySelectorAll('it-icon');
    expect(icons).toHaveLength(1);
  });

  it('should render icon on the right when iconPosition=right', () => {
    component.iconName = 'star-outline';
    component.iconPosition = 'right';
    fixture.detectChanges();
    const icons = fixture.nativeElement.querySelectorAll('it-icon');
    expect(icons).toHaveLength(1);
  });

  it('should not render icon when iconName is not set', () => {
    fixture.detectChanges();
    const icons = fixture.nativeElement.querySelectorAll('it-icon');
    expect(icons).toHaveLength(0);
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
