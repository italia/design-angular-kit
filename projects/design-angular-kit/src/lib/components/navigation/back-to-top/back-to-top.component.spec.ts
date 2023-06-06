import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItBackToTopComponent } from './back-to-top.component';
import { tb_base } from '../../../../test';

describe('ItBackToTopComponent', () => {
  let component: ItBackToTopComponent;
  let fixture: ComponentFixture<ItBackToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
