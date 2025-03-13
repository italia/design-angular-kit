import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExamplesComponent } from './search-examples.component';

describe('SearchExamplesComponent', () => {
  let component: SearchExamplesComponent;
  let fixture: ComponentFixture<SearchExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchExamplesComponent],
    });
    fixture = TestBed.createComponent(SearchExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
