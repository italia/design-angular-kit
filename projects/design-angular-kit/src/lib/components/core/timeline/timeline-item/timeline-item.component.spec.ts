import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTimelineItemComponent } from './timeline-item.component';

describe('ItTimelineItemComponent', () => {
  let component: ItTimelineItemComponent;
  let fixture: ComponentFixture<ItTimelineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItTimelineItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItTimelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
