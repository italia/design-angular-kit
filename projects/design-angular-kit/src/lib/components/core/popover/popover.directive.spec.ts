import { ElementRef } from '@angular/core'
import { TestBed } from '@angular/core/testing'

import { ItPopoverDirective } from './popover.directive'

export class MockElementRef extends ElementRef {
  nativeElement= {}
}

describe('ItPopoverDirective', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();
  })

  it('should create an instance', () => {
    const directive = new ItPopoverDirective(TestBed.inject(ElementRef));
    expect(directive).toBeTruthy();
  });
});
