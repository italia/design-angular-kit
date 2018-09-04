import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputReactiveExampleComponent } from './form-input-reactive-example.component';

describe('FormInputReactiveExampleComponent', () => {
  let component: FormInputReactiveExampleComponent;
  let fixture: ComponentFixture<FormInputReactiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputReactiveExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputReactiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
