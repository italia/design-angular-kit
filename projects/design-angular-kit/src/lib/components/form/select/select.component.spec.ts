import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSelectComponent } from './select.component';
import { tb_base } from '../../../../test';

describe('ItSelectComponent', () => {
  let component: ItSelectComponent;
  let fixture: ComponentFixture<ItSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItSelectComponent);
    component = fixture.componentInstance;
    component.options = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
