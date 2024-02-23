import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToggleCheckboxComponent } from './list-toggle-checkbox.component';

describe('ListToggleCheckboxComponent', () => {
  let component: ListToggleCheckboxComponent;
  let fixture: ComponentFixture<ListToggleCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListToggleCheckboxComponent],
    });
    fixture = TestBed.createComponent(ListToggleCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
