import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItListItemComponent } from './list-item.component';
import { tb_base } from '../../../../../test';

describe('ItListItemComponent', () => {
  let component: ItListItemComponent;
  let fixture: ComponentFixture<ItListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
