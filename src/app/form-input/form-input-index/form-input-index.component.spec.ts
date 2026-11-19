import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputIndexComponent } from './form-input-index.component';

describe('FormInputIndexComponent', () => {
  let component: FormInputIndexComponent;
  let fixture: ComponentFixture<FormInputIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormInputIndexComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
