import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { ProgressBarButtonComponent } from './progress-bar-button.component';

describe('ProgressBarHeightComponent', () => {
  let component: ProgressBarButtonComponent;
  let fixture: ComponentFixture<ProgressBarButtonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
