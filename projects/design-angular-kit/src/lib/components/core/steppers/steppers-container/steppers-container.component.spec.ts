import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSteppersContainerComponent } from './steppers-container.component';
import { tb_base } from '../../../../../test';

describe('ItSteppersContainerComponent', () => {
  let component: ItSteppersContainerComponent;
  let fixture: ComponentFixture<ItSteppersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItSteppersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
