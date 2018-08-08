import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExampleColorComponent } from './button-example-color.component';

describe('ButtonExampleColorComponent', () => {
  let component: ButtonExampleColorComponent;
  let fixture: ComponentFixture<ButtonExampleColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExampleColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExampleColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
