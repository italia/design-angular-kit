import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCheckboxComponent } from './checkbox.component';
import { tb_base } from '../../../../test';

describe('ItCheckboxComponent', () => {
  let component: ItCheckboxComponent;
  let fixture: ComponentFixture<ItCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT render aria-describedby on toggle checkbox when group is false', () => {
    component.toggle = true;
    component.group = false;
    fixture.detectChanges();
    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input[type="checkbox"]');
    expect(inputEl?.getAttribute('aria-describedby')).toBeNull();
  });

  it('should render aria-describedby on toggle checkbox when group is true', () => {
    fixture.componentRef.setInput('toggle', true);
    fixture.componentRef.setInput('group', true);
    fixture.detectChanges();
    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input[type="checkbox"]');
    expect(inputEl?.getAttribute('aria-describedby')).toBe(`${component.id}-help`);
  });

  it('should NOT render aria-describedby on standard checkbox when group is false', () => {
    component.toggle = false;
    component.group = false;
    fixture.detectChanges();
    const inputEl = (fixture.nativeElement as HTMLElement).querySelector('input[type="checkbox"]');
    expect(inputEl?.getAttribute('aria-describedby')).toBeNull();
  });
});
