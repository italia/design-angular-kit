import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAlertComponent } from './alert.component';
import { tb_base } from '../../../../test';

describe('ItAlertComponent', () => {
  let component: ItAlertComponent;
  let fixture: ComponentFixture<ItAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
