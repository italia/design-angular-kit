import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSearchExampleComponent } from './search-search-example.component';

describe('SearchSearchExampleComponent', () => {
  let component: SearchSearchExampleComponent;
  let fixture: ComponentFixture<SearchSearchExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSearchExampleComponent],
    });
    fixture = TestBed.createComponent(SearchSearchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
