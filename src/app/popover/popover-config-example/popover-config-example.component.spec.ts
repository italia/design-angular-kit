import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverConfigExampleComponent } from './popover-config-example.component';

describe('PopoverConfigExampleComponent', () => {
  let component: PopoverConfigExampleComponent;
  let fixture: ComponentFixture<PopoverConfigExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverConfigExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverConfigExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
