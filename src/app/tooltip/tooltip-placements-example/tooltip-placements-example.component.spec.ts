import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipPlacementsExampleComponent } from './tooltip-placements-example.component';

describe('TooltipPlacementsExampleComponent', () => {
  let component: TooltipPlacementsExampleComponent;
  let fixture: ComponentFixture<TooltipPlacementsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipPlacementsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipPlacementsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
