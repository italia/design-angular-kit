import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ItTooltipDirective } from './tooltip.directive';

export class MockElementRef extends ElementRef {
  nativeElement = {};
}

describe('ItTooltipDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }, ItTooltipDirective],
    }).compileComponents();
  });
  it('should create an instance', () => {
    const directive = TestBed.inject(ItTooltipDirective);
    expect(directive).toBeTruthy();
  });
});
