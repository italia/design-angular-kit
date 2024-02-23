import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCardComponent } from './card.component';
import { tb_base } from '../../../../test';

describe('ItCardComponent', () => {
  let component: ItCardComponent;
  let fixture: ComponentFixture<ItCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
