import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarBgComponent } from './progress-bar-bg.component';

describe('ProgressBarBgComponent', () => {
  let component: ProgressBarBgComponent;
  let fixture: ComponentFixture<ProgressBarBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
