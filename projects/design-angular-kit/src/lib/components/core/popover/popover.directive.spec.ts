import { ElementRef } from '@angular/core'
import { TestBed } from '@angular/core/testing'

import { PopoverDirective } from './popover.directive'

export class MockElementRef extends ElementRef {
  nativeElement= {}
}

describe('PopoverDirective', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();
  })

  it('should create an instance', () => {
    const directive = new PopoverDirective(TestBed.inject(ElementRef));
    expect(directive).toBeTruthy();
  });
});
