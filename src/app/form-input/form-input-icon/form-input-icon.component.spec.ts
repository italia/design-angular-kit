import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputIconExampleComponent } from './form-input-icon.component';

describe('FormInputIconExampleComponent', () => {
  let component: FormInputIconExampleComponent;
  let fixture: ComponentFixture<FormInputIconExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputIconExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputIconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
