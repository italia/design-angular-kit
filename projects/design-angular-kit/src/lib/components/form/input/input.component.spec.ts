import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItInputComponent } from './input.component';
import { tb_base } from '../../../../test';

describe('ItInputComponent', () => {
  let component: ItInputComponent;
  let fixture: ComponentFixture<ItInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
