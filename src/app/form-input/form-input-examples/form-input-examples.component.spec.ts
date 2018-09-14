import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputExamplesComponent } from './form-input-examples.component';

describe('FormInputExamplesComponent', () => {
  let component: FormInputExamplesComponent;
  let fixture: ComponentFixture<FormInputExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
