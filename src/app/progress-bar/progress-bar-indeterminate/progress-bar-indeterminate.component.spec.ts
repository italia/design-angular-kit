import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarIndeterminateComponent } from './progress-bar-indeterminate.component';

describe('ProgressBarHeightComponent', () => {
  let component: ProgressBarIndeterminateComponent;
  let fixture: ComponentFixture<ProgressBarIndeterminateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarIndeterminateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarIndeterminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
