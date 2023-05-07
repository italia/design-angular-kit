import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppersContainerComponent } from './steppers-container.component';
import { tb_base } from '../../../../../test';

describe('SteppersContainerComponent', () => {
  let component: SteppersContainerComponent;
  let fixture: ComponentFixture<SteppersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(SteppersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
