import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItProgressBarComponent } from './progress-bar.component';
import { tb_base } from '../../../../test';

describe('ItProgressBarComponent', () => {
  let component: ItProgressBarComponent;
  let fixture: ComponentFixture<ItProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
