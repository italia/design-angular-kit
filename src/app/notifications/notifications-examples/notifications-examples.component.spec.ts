import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsExamplesComponent } from './notifications-examples.component';

describe('NotificationsExamplesComponent', () => {
  let component: NotificationsExamplesComponent;
  let fixture: ComponentFixture<NotificationsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
