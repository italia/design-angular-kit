import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ItOverflowXDirective, ItOverflowYDirective } from './overflow.directive';
import { tb_base } from '../../../../test';

// ─── Host Components ─────────────────────────────────────────────────────────

@Component({
  selector: 'it-test-overflow-x-auto',
  template: '<div itOverflowX="auto" class="test-box">content</div>',
  imports: [ItOverflowXDirective],
})
class OverflowXAutoHost {}

@Component({
  selector: 'it-test-overflow-x-hidden',
  template: '<div itOverflowX="hidden" class="test-box">content</div>',
  imports: [ItOverflowXDirective],
})
class OverflowXHiddenHost {}

@Component({
  selector: 'it-test-overflow-x-scroll',
  template: '<div itOverflowX="scroll" class="test-box">content</div>',
  imports: [ItOverflowXDirective],
})
class OverflowXScrollHost {}

@Component({
  selector: 'it-test-overflow-x-visible',
  template: '<div itOverflowX="visible" class="test-box">content</div>',
  imports: [ItOverflowXDirective],
})
class OverflowXVisibleHost {}

@Component({
  selector: 'it-test-overflow-x-clip',
  template: '<div itOverflowX="clip" class="test-box">content</div>',
  imports: [ItOverflowXDirective],
})
class OverflowXClipHost {}

@Component({
  selector: 'it-test-overflow-y-auto',
  template: '<div itOverflowY="auto" class="test-box">content</div>',
  imports: [ItOverflowYDirective],
})
class OverflowYAutoHost {}

@Component({
  selector: 'it-test-overflow-y-hidden',
  template: '<div itOverflowY="hidden" class="test-box">content</div>',
  imports: [ItOverflowYDirective],
})
class OverflowYHiddenHost {}

@Component({
  selector: 'it-test-overflow-y-scroll',
  template: '<div itOverflowY="scroll" class="test-box">content</div>',
  imports: [ItOverflowYDirective],
})
class OverflowYScrollHost {}

@Component({
  selector: 'it-test-overflow-y-visible',
  template: '<div itOverflowY="visible" class="test-box">content</div>',
  imports: [ItOverflowYDirective],
})
class OverflowYVisibleHost {}

@Component({
  selector: 'it-test-overflow-y-clip',
  template: '<div itOverflowY="clip" class="test-box">content</div>',
  imports: [ItOverflowYDirective],
})
class OverflowYClipHost {}

@Component({
  selector: 'it-test-overflow-both',
  template: '<div itOverflowX="auto" itOverflowY="hidden" class="test-box">content</div>',
  imports: [ItOverflowXDirective, ItOverflowYDirective],
})
class OverflowBothHost {}

// ─── Spec ────────────────────────────────────────────────────────────────────

describe('ItOverflowXDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [
        ...(tb_base.imports || []),
        ItOverflowXDirective,
        ItOverflowYDirective,
        OverflowXAutoHost,
        OverflowXHiddenHost,
        OverflowXScrollHost,
        OverflowXVisibleHost,
        OverflowXClipHost,
        OverflowYAutoHost,
        OverflowYHiddenHost,
        OverflowYScrollHost,
        OverflowYVisibleHost,
        OverflowYClipHost,
        OverflowBothHost,
      ],
    }).compileComponents();
  });

  it('should apply overflow-x: auto', () => {
    const fixture = TestBed.createComponent(OverflowXAutoHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowX).toBe('auto');
  });

  it('should apply overflow-x: hidden', () => {
    const fixture = TestBed.createComponent(OverflowXHiddenHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowX).toBe('hidden');
  });

  it('should apply overflow-x: scroll', () => {
    const fixture = TestBed.createComponent(OverflowXScrollHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowX).toBe('scroll');
  });

  it('should apply overflow-x: visible', () => {
    const fixture = TestBed.createComponent(OverflowXVisibleHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowX).toBe('visible');
  });

  it('should apply overflow-x: clip', () => {
    const fixture = TestBed.createComponent(OverflowXClipHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowX).toBe('clip');
  });
});

describe('ItOverflowYDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [
        ...(tb_base.imports || []),
        ItOverflowYDirective,
        OverflowYAutoHost,
        OverflowYHiddenHost,
        OverflowYScrollHost,
        OverflowYVisibleHost,
        OverflowYClipHost,
      ],
    }).compileComponents();
  });

  it('should apply overflow-y: auto', () => {
    const fixture = TestBed.createComponent(OverflowYAutoHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowY).toBe('auto');
  });

  it('should apply overflow-y: hidden', () => {
    const fixture = TestBed.createComponent(OverflowYHiddenHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowY).toBe('hidden');
  });

  it('should apply overflow-y: scroll', () => {
    const fixture = TestBed.createComponent(OverflowYScrollHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowY).toBe('scroll');
  });

  it('should apply overflow-y: visible', () => {
    const fixture = TestBed.createComponent(OverflowYVisibleHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowY).toBe('visible');
  });

  it('should apply overflow-y: clip', () => {
    const fixture = TestBed.createComponent(OverflowYClipHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowY).toBe('clip');
  });
});

describe('ItOverflowX + ItOverflowY combined', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...(tb_base.imports || []), ItOverflowXDirective, ItOverflowYDirective, OverflowBothHost],
    }).compileComponents();
  });

  it('should apply both overflow-x and overflow-y independently', () => {
    const fixture = TestBed.createComponent(OverflowBothHost);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.test-box')).nativeElement;
    expect(el.style.overflowX).toBe('auto');
    expect(el.style.overflowY).toBe('hidden');
  });
});
