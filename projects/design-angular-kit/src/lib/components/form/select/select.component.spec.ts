import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { tb_base } from '../../../../test';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.options = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
