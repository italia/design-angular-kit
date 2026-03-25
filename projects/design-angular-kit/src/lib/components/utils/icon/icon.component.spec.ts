import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItIconComponent } from './icon.component';
import { tb_base } from '../../../../test';

describe('ItIconComponent', () => {
  let component: ItIconComponent;
  let fixture: ComponentFixture<ItIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItIconComponent],
      providers: tb_base.providers,
    })
      .overrideComponent(ItIconComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ItIconComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.name = 'burger';
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should add icon-current-color class when no color input is provided (#607)', () => {
    component.name = 'burger';
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg') as SVGElement;
    expect(svg.getAttribute('class')).toContain('icon-current-color');
  });

  it('should NOT add icon-current-color class when a color input is provided (#607)', () => {
    component.name = 'burger';
    component.color = 'white';
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg') as SVGElement;
    expect(svg.getAttribute('class')).not.toContain('icon-current-color');
    expect(svg.getAttribute('class')).toContain('icon-white');
  });

  it('should apply icon-{color} class when color is set', () => {
    component.name = 'burger';
    component.color = 'primary';
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg') as SVGElement;
    expect(svg.getAttribute('class')).toContain('icon-primary');
  });
});
