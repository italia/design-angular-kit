import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipEventsExampleComponent } from './tooltip-events-example.component';

describe('TooltipEventsExampleComponent', () => {
  let component: TooltipEventsExampleComponent;
  let fixture: ComponentFixture<TooltipEventsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipEventsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipEventsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
