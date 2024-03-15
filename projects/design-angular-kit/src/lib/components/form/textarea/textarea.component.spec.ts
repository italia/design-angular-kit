import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTextareaComponent } from './textarea.component';
import { tb_base } from '../../../../test';

describe('ItTextareaComponent', () => {
  let component: ItTextareaComponent;
  let fixture: ComponentFixture<ItTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
