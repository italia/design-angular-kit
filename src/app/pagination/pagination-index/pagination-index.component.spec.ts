import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationIndexComponent } from './pagination-index.component';

describe('PaginationIndexComponent', () => {
  let component: PaginationIndexComponent;
  let fixture: ComponentFixture<PaginationIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
