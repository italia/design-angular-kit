import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarHeightComponent } from './progress-bar-height.component';

describe('ProgressBarHeightComponent', () => {
  let component: ProgressBarHeightComponent;
  let fixture: ComponentFixture<ProgressBarHeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarHeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
