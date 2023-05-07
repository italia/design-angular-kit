import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonComponent } from './radio-button.component';
import { tb_base } from '../../../../test';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
