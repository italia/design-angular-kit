import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverPlacementsExampleComponent } from './popover-placements-example.component';

describe('PopoverPlacementsExampleComponent', () => {
  let component: PopoverPlacementsExampleComponent;
  let fixture: ComponentFixture<PopoverPlacementsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverPlacementsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverPlacementsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
