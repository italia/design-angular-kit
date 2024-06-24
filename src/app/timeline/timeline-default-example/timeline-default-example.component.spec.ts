import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDefaultExampleComponent } from './timeline-default-example.component';

describe('TimelineDefaultExampleComponent', () => {
  let component: TimelineDefaultExampleComponent;
  let fixture: ComponentFixture<TimelineDefaultExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineDefaultExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineDefaultExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
