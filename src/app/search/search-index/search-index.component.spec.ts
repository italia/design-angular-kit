import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIndexComponent } from './search-index.component';

describe('SearchIndexComponent', () => {
  let component: SearchIndexComponent;
  let fixture: ComponentFixture<SearchIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchIndexComponent],
    });
    fixture = TestBed.createComponent(SearchIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
