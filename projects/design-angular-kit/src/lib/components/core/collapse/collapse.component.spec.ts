import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseComponent } from './collapse.component';
import { tb_base } from '../../../../test';

describe('CollapseComponent', () => {
  let component: CollapseComponent;
  let fixture: ComponentFixture<CollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(CollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
