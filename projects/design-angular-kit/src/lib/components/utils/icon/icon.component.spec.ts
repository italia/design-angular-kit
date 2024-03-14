import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItIconComponent } from './icon.component';
import { tb_base } from '../../../../test';

describe('ItIconComponent', () => {
  let component: ItIconComponent;
  let fixture: ComponentFixture<ItIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
