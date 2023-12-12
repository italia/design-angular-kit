import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDropdownItemComponent } from './dropdown-item.component';
import { tb_base } from '../../../../../test';

describe('ItDropdownItemComponent', () => {
  let component: ItDropdownItemComponent;
  let fixture: ComponentFixture<ItDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
