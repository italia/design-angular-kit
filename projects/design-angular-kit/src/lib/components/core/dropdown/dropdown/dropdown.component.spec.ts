import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDropdownComponent } from './dropdown.component';
import { tb_base } from '../../../../../test';

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
