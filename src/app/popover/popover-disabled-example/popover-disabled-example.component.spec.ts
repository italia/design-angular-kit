import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDisabledExampleComponent } from './popover-disabled-example.component';

describe('PopoverDisabledExampleComponent', () => {
  let component: PopoverDisabledExampleComponent;
  let fixture: ComponentFixture<PopoverDisabledExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDisabledExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
