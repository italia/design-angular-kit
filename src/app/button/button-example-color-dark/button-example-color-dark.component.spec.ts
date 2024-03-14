import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExampleColorDarkComponent } from './button-example-color-dark.component';

describe('ButtonExampleColorComponent', () => {
  let component: ButtonExampleColorDarkComponent;
  let fixture: ComponentFixture<ButtonExampleColorDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonExampleColorDarkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExampleColorDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
