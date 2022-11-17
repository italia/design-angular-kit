import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExampleIconComponent } from './button-example-icon.component';

describe('ButtonExampleInteractiveComponent', () => {
  let component: ButtonExampleIconComponent;
  let fixture: ComponentFixture<ButtonExampleIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExampleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExampleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
