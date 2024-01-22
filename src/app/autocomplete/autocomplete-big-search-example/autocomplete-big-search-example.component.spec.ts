import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteBigSearchExampleComponent } from './autocomplete-big-search-example.component';

describe('AutocompleteBigSearchExampleComponent', () => {
  let component: AutocompleteBigSearchExampleComponent;
  let fixture: ComponentFixture<AutocompleteBigSearchExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteBigSearchExampleComponent]
    });
    fixture = TestBed.createComponent(AutocompleteBigSearchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
