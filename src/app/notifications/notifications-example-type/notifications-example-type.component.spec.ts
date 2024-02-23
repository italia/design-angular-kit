import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsExampleTypeComponent } from './notifications-example-type.component';

describe('NotificationsExampleTypeComponent', () => {
  let component: NotificationsExampleTypeComponent;
  let fixture: ComponentFixture<NotificationsExampleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationsExampleTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsExampleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
