import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { FormInputNumberExampleComponent } from './form-input-number.component';

describe('FormInputIconExampleComponent', () => {
  let component: FormInputNumberExampleComponent;
  let fixture: ComponentFixture<FormInputNumberExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputNumberExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputNumberExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
