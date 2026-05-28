import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ItDropdownComponent } from './dropdown.component';
import { ItDropdownItemComponent } from '../dropdown-item/dropdown-item.component';
import { tb_base } from '../../../../../test';

@Component({
  selector: 'it-dropdown-test-host',
  standalone: true,
  imports: [ItDropdownComponent, ItDropdownItemComponent],
  template: `
    <it-dropdown [iconPosition]="parentPosition">
      <span button>Azione</span>
      <li itDropdownItem list iconName="star-outline" id="item1">Item 1</li>
      <li itDropdownItem list iconName="star-outline" id="item2" iconPosition="right">Item 2</li>
    </it-dropdown>
  `,
})
class DropdownTestHostComponent {
  parentPosition: 'left' | 'right' | undefined;
}

describe('ItDropdownComponent', () => {
  let component: ItDropdownComponent;
  let fixture: ComponentFixture<ItDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ItDropdownComponent iconPosition inheritance', () => {
  let fixture: ComponentFixture<DropdownTestHostComponent>;
  let host: DropdownTestHostComponent;

  beforeEach(async () => {
    const testModule = { ...tb_base, imports: [...(tb_base.imports || []), DropdownTestHostComponent] };
    await TestBed.configureTestingModule(testModule).compileComponents();

    fixture = TestBed.createComponent(DropdownTestHostComponent);
    host = fixture.componentInstance;
  });

  it('should propagate iconPosition from parent to children', () => {
    host.parentPosition = 'left';
    fixture.detectChanges();

    const dropdown: ItDropdownComponent = fixture.debugElement.children[0].componentInstance;
    expect(dropdown.iconPosition).toBe('left');

    const items = dropdown.items!.toArray();
    // item1 has no explicit iconPosition → should inherit 'left'
    expect(items[0].resolvedIconPosition).toBe('left');
    // item2 has explicit iconPosition="right" → should keep 'right'
    expect(items[1].resolvedIconPosition).toBe('right');
  });

  it('should default to right when parent has no iconPosition', () => {
    host.parentPosition = undefined;
    fixture.detectChanges();

    const dropdown: ItDropdownComponent = fixture.debugElement.children[0].componentInstance;
    const items = dropdown.items!.toArray();
    expect(items[0].resolvedIconPosition).toBe('right');
    expect(items[1].resolvedIconPosition).toBe('right');
  });
});
