import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { tb_base } from '../../../../test';
import { ItTextTransformDirective } from './text-transform.directive';

@Component({
  selector: 'it-test-none',
  standalone: true,
  imports: [ItTextTransformDirective],
  template: `<p itTextTransform="none">text</p>`,
})
class NoneHost {}
@Component({
  selector: 'it-test-cap',
  standalone: true,
  imports: [ItTextTransformDirective],
  template: `<p itTextTransform="capitalize">text</p>`,
})
class CapHost {}
@Component({
  selector: 'it-test-upper',
  standalone: true,
  imports: [ItTextTransformDirective],
  template: `<p itTextTransform="uppercase">text</p>`,
})
class UpperHost {}
@Component({
  selector: 'it-test-lower',
  standalone: true,
  imports: [ItTextTransformDirective],
  template: `<p itTextTransform="lowercase">text</p>`,
})
class LowerHost {}

describe('ItTextTransformDirective', () => {
  it('should apply text-transform: none', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), NoneHost] });
    const fix = TestBed.createComponent(NoneHost);
    fix.detectChanges();
    const p = fix.nativeElement.querySelector('p') as HTMLParagraphElement;
    expect(p.style.textTransform).toBe('none');
  });

  it('should apply text-transform: capitalize', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), CapHost] });
    const fix = TestBed.createComponent(CapHost);
    fix.detectChanges();
    const p = fix.nativeElement.querySelector('p') as HTMLParagraphElement;
    expect(p.style.textTransform).toBe('capitalize');
  });

  it('should apply text-transform: uppercase', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), UpperHost] });
    const fix = TestBed.createComponent(UpperHost);
    fix.detectChanges();
    const p = fix.nativeElement.querySelector('p') as HTMLParagraphElement;
    expect(p.style.textTransform).toBe('uppercase');
  });

  it('should apply text-transform: lowercase', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), LowerHost] });
    const fix = TestBed.createComponent(LowerHost);
    fix.detectChanges();
    const p = fix.nativeElement.querySelector('p') as HTMLParagraphElement;
    expect(p.style.textTransform).toBe('lowercase');
  });

  it('should default to none when used without explicit value', () => {
    @Component({
      selector: 'it-test-default',
      standalone: true,
      imports: [ItTextTransformDirective],
      template: `<p itTextTransform>text</p>`,
    })
    class DefaultHost {}
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), DefaultHost] });
    const fix = TestBed.createComponent(DefaultHost);
    fix.detectChanges();
    const p = fix.nativeElement.querySelector('p') as HTMLParagraphElement;
    expect(p.style.textTransform).toBe('none');
  });
});
