import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBigSearchExampleComponent } from './search-big-search-example.component';

describe('SearchBigSearchExampleComponent', () => {
  let component: SearchBigSearchExampleComponent;
  let fixture: ComponentFixture<SearchBigSearchExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBigSearchExampleComponent],
    });
    fixture = TestBed.createComponent(SearchBigSearchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
