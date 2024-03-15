import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExamplesComponent } from './list-examples.component';

describe('ListExamplesComponent', () => {
  let component: ListExamplesComponent;
  let fixture: ComponentFixture<ListExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListExamplesComponent],
    });
    fixture = TestBed.createComponent(ListExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
