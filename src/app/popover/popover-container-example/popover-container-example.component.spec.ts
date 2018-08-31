import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContainerExampleComponent } from './popover-container-example.component';

describe('PopoverContainerExampleComponent', () => {
  let component: PopoverContainerExampleComponent;
  let fixture: ComponentFixture<PopoverContainerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverContainerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContainerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
