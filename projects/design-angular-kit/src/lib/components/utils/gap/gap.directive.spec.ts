import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { tb_base } from '../../../../test';
import { ItGapDirective, ItGapXDirective, ItGapYDirective } from './gap.directive';

@Component({
  selector: 'it-test-gap0',
  standalone: true,
  imports: [ItGapDirective],
  template: `<div [itGap]="0">content</div>`,
})
class Gap0Host {}

@Component({
  selector: 'it-test-gap1',
  standalone: true,
  imports: [ItGapDirective],
  template: `<div [itGap]="1">content</div>`,
})
class Gap1Host {}

@Component({
  selector: 'it-test-gap3',
  standalone: true,
  imports: [ItGapDirective],
  template: `<div [itGap]="3">content</div>`,
})
class Gap3Host {}

@Component({
  selector: 'it-test-gap5',
  standalone: true,
  imports: [ItGapDirective],
  template: `<div [itGap]="5">content</div>`,
})
class Gap5Host {}

@Component({
  selector: 'it-test-gx2',
  standalone: true,
  imports: [ItGapXDirective],
  template: `<div [itGapX]="2">content</div>`,
})
class GapX2Host {}

@Component({
  selector: 'it-test-gy4',
  standalone: true,
  imports: [ItGapYDirective],
  template: `<div [itGapY]="4">content</div>`,
})
class GapY4Host {}

@Component({
  selector: 'it-test-combined',
  standalone: true,
  imports: [ItGapXDirective, ItGapYDirective],
  template: `<div [itGapX]="2" [itGapY]="4">content</div>`,
})
class CombinedHost {}

describe('ItGapDirective', () => {
  it('should apply gap: 0 for scale 0', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), Gap0Host] });
    const fix = TestBed.createComponent(Gap0Host);
    fix.detectChanges();
    const div = fix.nativeElement.querySelector('div') as HTMLDivElement;
    expect(div.style.gap).toBe('0px');
  });

  it('should apply gap: 0.25rem for scale 1', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), Gap1Host] });
    const fix = TestBed.createComponent(Gap1Host);
    fix.detectChanges();
    const div = fix.nativeElement.querySelector('div') as HTMLDivElement;
    expect(div.style.gap).toBe('0.25rem');
  });

  it('should apply gap: 1rem for scale 3', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), Gap3Host] });
    const fix = TestBed.createComponent(Gap3Host);
    fix.detectChanges();
    const div = fix.nativeElement.querySelector('div') as HTMLDivElement;
    expect(div.style.gap).toBe('1rem');
  });

  it('should apply gap: 3rem for scale 5', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), Gap5Host] });
    const fix = TestBed.createComponent(Gap5Host);
    fix.detectChanges();
    const div = fix.nativeElement.querySelector('div') as HTMLDivElement;
    expect(div.style.gap).toBe('3rem');
  });
});

describe('ItGapXDirective', () => {
  it('should apply column-gap: 0.5rem for scale 2', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), GapX2Host] });
    const fix = TestBed.createComponent(GapX2Host);
    fix.detectChanges();
    const div = fix.nativeElement.querySelector('div') as HTMLDivElement;
    expect(div.style.columnGap).toBe('0.5rem');
  });
});

describe('ItGapYDirective', () => {
  it('should apply row-gap: 1.5rem for scale 4', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), GapY4Host] });
    const fix = TestBed.createComponent(GapY4Host);
    fix.detectChanges();
    const div = fix.nativeElement.querySelector('div') as HTMLDivElement;
    expect(div.style.rowGap).toBe('1.5rem');
  });
});

describe('ItGapX + ItGapY combined', () => {
  it('should apply column-gap and row-gap independently', () => {
    TestBed.configureTestingModule({ ...tb_base, imports: [...(tb_base.imports || []), CombinedHost] });
    const fix = TestBed.createComponent(CombinedHost);
    fix.detectChanges();
    const div = fix.nativeElement.querySelector('div') as HTMLDivElement;
    expect(div.style.columnGap).toBe('0.5rem');
    expect(div.style.rowGap).toBe('1.5rem');
  });
});
