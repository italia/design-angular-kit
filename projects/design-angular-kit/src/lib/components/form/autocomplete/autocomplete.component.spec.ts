import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAutocompleteComponent } from './autocomplete.component';

describe('AutocompleteComponent', () => {
  let component: ItAutocompleteComponent;
  let fixture: ComponentFixture<ItAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItAutocompleteComponent],
    });
    fixture = TestBed.createComponent(ItAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
