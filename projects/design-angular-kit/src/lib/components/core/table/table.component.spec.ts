import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTableComponent } from './table.component';
import { tb_base } from '../../../../test';

describe('ItTableComponent', () => {
  let component: ItTableComponent;
  let fixture: ComponentFixture<ItTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
