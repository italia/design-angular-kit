import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverFocusExampleComponent } from './popover-focus-example.component';

describe('PopoverFocusExampleComponent', () => {
  let component: PopoverFocusExampleComponent;
  let fixture: ComponentFixture<PopoverFocusExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopoverFocusExampleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverFocusExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
