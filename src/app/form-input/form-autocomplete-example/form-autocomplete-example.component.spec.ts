import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAutocompleteExampleComponent } from './form-autocomplete-example.component';

describe('FormAutocompleteExampleComponent', () => {
  let component: FormAutocompleteExampleComponent;
  let fixture: ComponentFixture<FormAutocompleteExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAutocompleteExampleComponent]
    });
    fixture = TestBed.createComponent(FormAutocompleteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
