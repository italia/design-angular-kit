import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteIndexComponent } from './autocomplete-index.component';

describe('AutocompleteIndexComponent', () => {
  let component: AutocompleteIndexComponent;
  let fixture: ComponentFixture<AutocompleteIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteIndexComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
