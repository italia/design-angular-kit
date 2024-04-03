import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineIndexComponent } from './timeline-index.component';

describe('TimelineIndexComponent', () => {
  let component: TimelineIndexComponent;
  let fixture: ComponentFixture<TimelineIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
