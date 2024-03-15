import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItListComponent } from './list.component';
import { tb_base } from '../../../../../test';

describe('ItListComponent', () => {
  let component: ItListComponent;
  let fixture: ComponentFixture<ItListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
