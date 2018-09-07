import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverIndexComponent } from './popover-index.component';

describe('PopoverIndexComponent', () => {
  let component: PopoverIndexComponent;
  let fixture: ComponentFixture<PopoverIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
