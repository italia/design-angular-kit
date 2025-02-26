import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTimelineComponent } from './timeline.component';
import { tb_base } from '../../../../test';

describe('ItTimelineComponent', () => {
  let component: ItTimelineComponent;
  let fixture: ComponentFixture<ItTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
