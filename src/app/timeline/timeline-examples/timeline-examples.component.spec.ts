import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineExamplesComponent } from './timeline-examples.component';

describe('AlertExamplesComponent', () => {
  let component: TimelineExamplesComponent;
  let fixture: ComponentFixture<TimelineExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
