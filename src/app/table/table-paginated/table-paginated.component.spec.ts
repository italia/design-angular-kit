import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginatedComponent } from './table-paginated.component';

describe('TablePaginatedComponent', () => {
  let component: TablePaginatedComponent;
  let fixture: ComponentFixture<TablePaginatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePaginatedComponent]
    });
    fixture = TestBed.createComponent(TablePaginatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
