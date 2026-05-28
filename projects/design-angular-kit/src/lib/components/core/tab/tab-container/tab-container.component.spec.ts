import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTabContainerComponent } from './tab-container.component';
import { tb_base } from '../../../../../test';

describe('ItTabContainerComponent', () => {
  let component: ItTabContainerComponent;
  let fixture: ComponentFixture<ItTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isVertical', () => {
    it('should return false when vertical is not set', () => {
      expect(component.isVertical).toBe(false);
    });

    it('should return true when vertical is set without breakpoint', () => {
      component.vertical = true;
      expect(component.isVertical).toBe(true);
    });

    it('should accept verticalBreakpoint input', () => {
      component.vertical = true;
      component.verticalBreakpoint = 'md';
      expect(component.verticalBreakpoint).toBe('md');
    });

    it('should be responsive when vertical and verticalBreakpoint are both set', () => {
      component.vertical = true;
      component.verticalBreakpoint = 'md';
      // After ngAfterViewInit, isVertical should reflect the media query state
      component.ngAfterViewInit();
      // The value depends on the test viewport, but the getter should not throw
      expect(typeof component.isVertical).toBe('boolean');
    });
  });

  describe('cleanup', () => {
    it('should not throw on destroy with responsive breakpoint', () => {
      component.vertical = true;
      component.verticalBreakpoint = 'lg';
      component.ngAfterViewInit();
      expect(() => component.ngOnDestroy()).not.toThrow();
    });

    it('should not throw on destroy without responsive breakpoint', () => {
      expect(() => component.ngOnDestroy()).not.toThrow();
    });
  });
});
