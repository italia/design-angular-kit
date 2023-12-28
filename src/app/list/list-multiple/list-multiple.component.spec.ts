import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMultipleComponent } from './list-multiple.component';

describe('ListMultipleComponent', () => {
  let component: ListMultipleComponent;
  let fixture: ComponentFixture<ListMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMultipleComponent]
    });
    fixture = TestBed.createComponent(ListMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
