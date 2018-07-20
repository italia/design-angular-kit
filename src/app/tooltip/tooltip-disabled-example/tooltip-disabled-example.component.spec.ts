import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDisabledExampleComponent } from './tooltip-disabled-example.component';

describe('TooltipDisabledExampleComponent', () => {
  let component: TooltipDisabledExampleComponent;
  let fixture: ComponentFixture<TooltipDisabledExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDisabledExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
