import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarIndexComponent } from './progress-bar-index.component';

describe('ProgressBarIndexComponent', () => {
  let component: ProgressBarIndexComponent;
  let fixture: ComponentFixture<ProgressBarIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarIndexComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
