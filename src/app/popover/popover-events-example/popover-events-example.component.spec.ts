import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverEventsExampleComponent } from './popover-events-example.component';

describe('PopoverEventsExampleComponent', () => {
  let component: PopoverEventsExampleComponent;
  let fixture: ComponentFixture<PopoverEventsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverEventsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverEventsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
