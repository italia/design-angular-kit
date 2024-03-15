import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCollapseComponent } from './collapse.component';
import { tb_base } from '../../../../test';

describe('ItCollapseComponent', () => {
  let component: ItCollapseComponent;
  let fixture: ComponentFixture<ItCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
