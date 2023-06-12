import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItProgressButtonComponent } from './progress-button.component';
import { tb_base } from '../../../../test';

describe('ItProgressButtonComponent', () => {
  let component: ItProgressButtonComponent;
  let fixture: ComponentFixture<ItProgressButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItProgressButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
