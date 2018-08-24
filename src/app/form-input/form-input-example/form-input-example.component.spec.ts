import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputExampleComponent } from './form-input-example.component';

describe('FormInputExampleComponent', () => {
  let component: FormInputExampleComponent;
  let fixture: ComponentFixture<FormInputExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
