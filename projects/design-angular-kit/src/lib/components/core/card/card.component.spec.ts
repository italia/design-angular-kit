import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCardComponent } from './card.component';
import { tb_base } from '../../../../test';

@Component({
  selector: 'it-test-no-padding',
  template: `<it-card [noPadding]="noPadding" [hasImage]="true" shadow="normal"><h4 class="it-card-title">Title</h4></it-card>`,
  imports: [ItCardComponent],
})
class NoPaddingHostComponent {
  noPadding = false;
}

describe('ItCardComponent', () => {
  let component: ItCardComponent;
  let fixture: ComponentFixture<ItCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ItCardComponent noPadding', () => {
  let hostFixture: ComponentFixture<NoPaddingHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...tb_base,
      imports: [...(tb_base as any).imports, NoPaddingHostComponent],
    })
      .overrideComponent(ItCardComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    hostFixture = TestBed.createComponent(NoPaddingHostComponent);
    hostFixture.detectChanges();
  });

  it('should not apply p-0 class by default', () => {
    const article: HTMLElement = hostFixture.nativeElement.querySelector('article.it-card');
    expect(article.classList.contains('p-0')).toBeFalse();
  });

  it('should apply p-0 class when noPadding is true', () => {
    const f2 = TestBed.createComponent(NoPaddingHostComponent);
    f2.componentInstance.noPadding = true;
    f2.detectChanges();

    const article: HTMLElement = f2.nativeElement.querySelector('article.it-card');
    expect(article.classList.contains('p-0')).toBeTrue();
  });

  it('should remove p-0 class when noPadding toggles back to false', () => {
    const f2 = TestBed.createComponent(NoPaddingHostComponent);
    f2.componentInstance.noPadding = true;
    f2.detectChanges();

    // Verify p-0 is applied first
    let article: HTMLElement = f2.nativeElement.querySelector('article.it-card');
    expect(article.classList.contains('p-0')).toBeTrue();

    // Toggle back — create fresh fixture to avoid ExpressionChanged
    const f3 = TestBed.createComponent(NoPaddingHostComponent);
    f3.componentInstance.noPadding = false;
    f3.detectChanges();

    article = f3.nativeElement.querySelector('article.it-card');
    expect(article.classList.contains('p-0')).toBeFalse();
  });

  it('should coerce string "true" to boolean', () => {
    const f2 = TestBed.createComponent(NoPaddingHostComponent);
    (f2.componentInstance as any).noPadding = 'true';
    f2.detectChanges();

    const article: HTMLElement = f2.nativeElement.querySelector('article.it-card');
    expect(article.classList.contains('p-0')).toBeTrue();
  });

  it('should preserve other card classes when noPadding is set', () => {
    const f2 = TestBed.createComponent(NoPaddingHostComponent);
    f2.componentInstance.noPadding = true;
    f2.detectChanges();

    const article: HTMLElement = f2.nativeElement.querySelector('article.it-card');
    expect(article.classList.contains('it-card')).toBeTrue();
    expect(article.classList.contains('rounded')).toBeTrue();
    expect(article.classList.contains('shadow')).toBeTrue();
    expect(article.classList.contains('it-card-image')).toBeTrue();
    expect(article.classList.contains('p-0')).toBeTrue();
  });
});
