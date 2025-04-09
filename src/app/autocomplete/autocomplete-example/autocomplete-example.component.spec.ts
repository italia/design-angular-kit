import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteExampleComponent } from './autocomplete-example.component';

describe('AutocompleteExampleComponent', () => {
  let component: AutocompleteExampleComponent;
  let fixture: ComponentFixture<AutocompleteExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteExampleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
