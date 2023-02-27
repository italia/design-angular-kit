import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsExampleComponent } from './notifications-example.component';

describe('NotificationsExampleComponent', () => {
  let component: NotificationsExampleComponent;
  let fixture: ComponentFixture<NotificationsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
