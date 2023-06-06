import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSpinnerComponent } from './spinner.component';
import { tb_base } from '../../../../test';

describe('ItSpinnerComponent', () => {
  let component: ItSpinnerComponent;
  let fixture: ComponentFixture<ItSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
