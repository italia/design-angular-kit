import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSearchExampleComponent } from './autocomplete-search-example.component';

describe('AutocompleteSearchExampleComponent', () => {
  let component: AutocompleteSearchExampleComponent;
  let fixture: ComponentFixture<AutocompleteSearchExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteSearchExampleComponent]
    });
    fixture = TestBed.createComponent(AutocompleteSearchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
