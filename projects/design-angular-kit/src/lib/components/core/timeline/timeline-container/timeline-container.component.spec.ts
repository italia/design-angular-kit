import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTimelineContainerComponent } from './timeline-container.component';
import { tb_base } from '../../../../../test';

describe('ItTimelineContainerComponent', () => {
  let component: ItTimelineContainerComponent;
  let fixture: ComponentFixture<ItTimelineContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItTimelineContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
