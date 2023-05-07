import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { tb_base } from '../../../../../test';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
