import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItPasswordInputComponent } from './password-input.component';
import { tb_base } from '../../../../test';

describe('ItPasswordInputComponent', () => {
  let component: ItPasswordInputComponent;
  let fixture: ComponentFixture<ItPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
