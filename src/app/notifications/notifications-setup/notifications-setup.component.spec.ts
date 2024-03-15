import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsSetupComponent } from './notifications-setup.component';

describe('NotificationsSetupComponent', () => {
  let component: NotificationsSetupComponent;
  let fixture: ComponentFixture<NotificationsSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationsSetupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
