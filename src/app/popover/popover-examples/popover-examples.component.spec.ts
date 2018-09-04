import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverExamplesComponent } from './popover-examples.component';

describe('PopoverExamplesComponent', () => {
  let component: PopoverExamplesComponent;
  let fixture: ComponentFixture<PopoverExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
