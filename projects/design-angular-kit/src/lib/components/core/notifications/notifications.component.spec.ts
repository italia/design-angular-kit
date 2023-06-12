import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItNotificationsComponent } from './notifications.component';
import { tb_base } from '../../../../test';

describe('ItNotificationsComponent', () => {
  let component: ItNotificationsComponent;
  let fixture: ComponentFixture<ItNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base)
      .compileComponents();

    fixture = TestBed.createComponent(ItNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
