import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverInteractiveExampleComponent } from './popover-interactive-example.component';

describe('PopoverInteractiveExampleComponent', () => {
  let component: PopoverInteractiveExampleComponent;
  let fixture: ComponentFixture<PopoverInteractiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopoverInteractiveExampleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverInteractiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
