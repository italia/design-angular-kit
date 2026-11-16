import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItProgressBarComponent } from './progress-bar.component';
import { tb_base } from '../../../../test';

describe('ItProgressBarComponent', () => {
  let component: ItProgressBarComponent;
  let fixture: ComponentFixture<ItProgressBarComponent>;

  const getProgress = (): HTMLElement => fixture.nativeElement.querySelector('.progress');

  const getProgressBar = (): HTMLElement => fixture.nativeElement.querySelector('.progress-bar');

  const getLabel = (): HTMLElement | null => fixture.nativeElement.querySelector('.progress-bar-label');

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItProgressBarComponent);
    component = fixture.componentInstance;
    component.value = 50;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('determinate state', () => {
    it('should render the progress bar as determinate', () => {
      component.value = 50;
      component.indeterminate = false;
      fixture.detectChanges();

      expect(getProgressBar().style.width).toBe('50%');
    });
  });

  describe('indeterminate state', () => {
    it('should render the progress bar as indeterminate', () => {
      component.indeterminate = true;
      fixture.detectChanges();

      expect(getProgress().classList.contains('progress-indeterminate')).toBeTrue();
    });
  });

  describe('label', () => {
    it('should not render label when showLabel is false', () => {
      component.showLabel = false;
      fixture.detectChanges();

      expect(getLabel()).toBeNull();
    });

    it('should render percentage label when showLabel is true', () => {
      component.value = 50;
      component.showLabel = true;
      fixture.detectChanges();

      const label = getLabel();

      expect(label).toBeTruthy();
      expect(label?.textContent).toContain('50%');
    });
  });

  describe('color', () => {
    it('should not add color classes when color is undefined', () => {
      component.color = undefined;
      fixture.detectChanges();

      expect(getProgress().classList.contains('progress-color')).toBeFalse();
      expect(getProgressBar().className).not.toContain('bg-');
    });

    it('should add progress-color class when color is provided', () => {
      component.color = 'success';
      fixture.detectChanges();

      expect(getProgress().classList.contains('progress-color')).toBeTrue();
    });

    (['primary', 'success', 'danger', 'warning', 'info'] as const).forEach(color => {
      it(`should add bg-${color} class when color is ${color}`, () => {
        component.color = color;
        fixture.detectChanges();

        expect(getProgressBar().classList.contains(`bg-${color}`)).toBeTrue();
      });
    });
  });

  describe('bgColor', () => {
    it('should return empty string when color is undefined', () => {
      component.color = undefined;

      expect(component.bgColor).toBe('');
    });

    it('should return background color class when color is defined', () => {
      component.color = 'primary';

      expect(component.bgColor).toBe(' bg-primary');
    });
  });

  describe('accessibility', () => {
    it('should expose progressbar role', () => {
      fixture.detectChanges();

      expect(getProgressBar().getAttribute('role')).toBe('progressbar');
    });

    it('should expose value aria attributes when determinate', () => {
      component.value = 50;
      component.indeterminate = false;
      fixture.detectChanges();

      const progressBar = getProgressBar();

      expect(progressBar.getAttribute('aria-valuenow')).toBe('50');
      expect(progressBar.getAttribute('aria-valuemin')).toBe('0');
      expect(progressBar.getAttribute('aria-valuemax')).toBe('100');
    });

    it('should not expose value aria attributes when indeterminate', () => {
      component.indeterminate = true;
      fixture.detectChanges();

      const progressBar = getProgressBar();

      expect(progressBar.hasAttribute('aria-valuenow')).toBeFalse();
      expect(progressBar.hasAttribute('aria-valuemin')).toBeFalse();
      expect(progressBar.hasAttribute('aria-valuemax')).toBeFalse();
    });

    it('should include visually-hidden text when label is shown', () => {
      component.showLabel = true;
      fixture.detectChanges();

      const visuallyHidden = fixture.nativeElement.querySelector('.progress-bar-label .visually-hidden');

      expect(visuallyHidden).toBeTruthy();
    });
  });
});
