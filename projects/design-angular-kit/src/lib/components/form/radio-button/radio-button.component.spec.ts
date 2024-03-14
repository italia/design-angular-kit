import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRadioButtonComponent } from './radio-button.component';
import { tb_base } from '../../../../test';

describe('ItRadioButtonComponent', () => {
  let component: ItRadioButtonComponent;
  let fixture: ComponentFixture<ItRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
