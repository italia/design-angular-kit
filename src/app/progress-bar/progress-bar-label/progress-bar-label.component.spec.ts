import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarLabelComponent } from './progress-bar-label.component';

describe('ProgressBarLabelComponent', () => {
  let component: ProgressBarLabelComponent;
  let fixture: ComponentFixture<ProgressBarLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarLabelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
