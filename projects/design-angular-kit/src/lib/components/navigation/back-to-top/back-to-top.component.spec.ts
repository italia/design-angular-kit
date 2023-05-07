import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTopComponent } from './back-to-top.component';
import { tb_base } from '../../../../test';

describe('BackToTopComponent', () => {
  let component: BackToTopComponent;
  let fixture: ComponentFixture<BackToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(BackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
