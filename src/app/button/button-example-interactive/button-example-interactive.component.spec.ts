import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExampleInteractiveComponent } from './button-example-interactive.component';

describe('ButtonExampleInteractiveComponent', () => {
  let component: ButtonExampleInteractiveComponent;
  let fixture: ComponentFixture<ButtonExampleInteractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExampleInteractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExampleInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
