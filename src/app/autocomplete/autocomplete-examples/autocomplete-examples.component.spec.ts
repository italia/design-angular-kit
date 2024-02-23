import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteExamplesComponent } from './autocomplete-examples.component';

describe('AutocompleteExamplesComponent', () => {
  let component: AutocompleteExamplesComponent;
  let fixture: ComponentFixture<AutocompleteExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteExamplesComponent],
    });
    fixture = TestBed.createComponent(AutocompleteExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
