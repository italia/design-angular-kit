import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipIndexComponent } from './tooltip-index.component';

describe('TooltipIndexComponent', () => {
  let component: TooltipIndexComponent;
  let fixture: ComponentFixture<TooltipIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
