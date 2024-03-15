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
});
