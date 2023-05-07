import { ElementRef } from '@angular/core'
import { TestBed } from '@angular/core/testing'

import { TooltipDirective } from './tooltip.directive'

export class MockElementRef extends ElementRef {
  nativeElement= {}
}


describe('TooltipDirective', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();
  })
  it('should create an instance', () => {

    const directive = new TooltipDirective(TestBed.inject(ElementRef));
    expect(directive).toBeTruthy();
  });
});
