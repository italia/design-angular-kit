import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItModalComponent } from './modal.component';
import { tb_base } from '../../../../test';

describe('ItModalComponent', () => {
  let component: ItModalComponent;
  let fixture: ComponentFixture<ItModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
