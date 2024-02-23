import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArrowComponent } from './list-arrow.component';

describe('ListArrowComponent', () => {
  let component: ListArrowComponent;
  let fixture: ComponentFixture<ListArrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListArrowComponent],
    });
    fixture = TestBed.createComponent(ListArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
