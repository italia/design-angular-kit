import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDropdownItemComponent } from './dropdown-item.component';
import { tb_base } from '../../../../../test';

describe('ItDropdownItemComponent', () => {
  let component: ItDropdownItemComponent;
  let fixture: ComponentFixture<ItDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .overrideComponent(ItDropdownItemComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ItDropdownItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should include itemClass in the inner link classes (#602)', () => {
    component.itemClass = 'text-uppercase fw-bold';
    fixture.detectChanges();
    expect(component.linkClass).toContain('text-uppercase fw-bold');
  });

  it('should not include extra space when itemClass is empty (#602)', () => {
    component.itemClass = '';
    fixture.detectChanges();
    expect(component.linkClass).not.toMatch(/\s{2,}/);
  });

  it('should combine itemClass with active class (#602)', () => {
    component.active = true;
    component.itemClass = 'custom-class';
    fixture.detectChanges();
    expect(component.linkClass).toContain('active');
    expect(component.linkClass).toContain('custom-class');
  });
});
